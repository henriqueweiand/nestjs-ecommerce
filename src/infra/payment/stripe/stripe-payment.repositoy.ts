import { OrderRepository } from "@app/application/ecommerce/ports/order.repositoy";
import { PaymentRepository } from "@app/application/ecommerce/ports/payment.repositoy";
import { EnvService } from "@app/infra/env";
import { Injectable } from "@nestjs/common";
import Stripe from "stripe";
import { StripeService } from "./stripe.service";
import { Order } from "@app/domain/ecommerce/order";

@Injectable()
export class StripePaymentRepository implements PaymentRepository {
  private stripe: Stripe;

  constructor(
    private orderRepository: OrderRepository,
    private stripeService: StripeService,
    private envService: EnvService
  ) {
    this.stripe = this.stripeService.getInstance();
  }

  async generateUrl(orderId: string): Promise<string> {
    const order = await this.orderRepository.findById(orderId);
    const settingsUrl = this.envService.get("CHECKOUT_SUCCESS_URL");

    if (!order) {
      throw new Error("Order not found");
    }

    const stripeSession = await this.stripe.checkout.sessions.create({
      success_url: settingsUrl,
      cancel_url: settingsUrl,
      payment_method_types: ["card"],
      mode: "payment",
      billing_address_collection: "auto",
      // customer_email: 'test@gmail.com', // this system doesn't have email
      line_items: order.orderProduct.map((item) => {
        return {
          price_data: {
            currency: "USD",
            product_data: {
              name: item.product,
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        };
      }),
      metadata: {
        orderId: order.id,
      },
    });

    return stripeSession.url || "";
  }

  private constructEvent({
    body,
    signature,
  }): Stripe.Event {
    let event: Stripe.Event;

    try {
      event = this.stripe.webhooks.constructEvent(
        body,
        signature,
        this.envService.get("STRIPE_WEBHOOK_SECRET")
      );
    } catch (error) {
      throw new Error("Webhook error");
    }

    return event;
  }

  async complete(orderData: any): Promise<Order> {
    const event = this.constructEvent(orderData);
    const session = event.data.object as Stripe.Checkout.Session;

    if (event.type === "checkout.session.completed") {
      try {
        const subscription = await this.stripe.subscriptions.retrieve(
          session.subscription as string
        );

        const orderId = session?.metadata?.orderId;

        if (!orderId) {
          throw new Error("Invalid event: orderId not found");
        }

        const order = await this.orderRepository.findById(orderId);

        if (order.status === "paid") {
          throw new Error("Order already paid");
        }

        const updatedOrder = await this.orderRepository.update(
          orderId,
          new Order({
            ...order.currentState,
            status: order.status,
            paymentId: session.payment_intent as string,
            paymentMethod: "stripe",
          })
        );

        return updatedOrder;
      } catch (error) {
        console.error(error);
        throw new Error("Invalid event: subscription not found");
      }
    } else {
      throw new Error("Invalid event");
    }
  }
}