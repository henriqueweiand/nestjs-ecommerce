"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "StripePaymentRepository", {
    enumerable: true,
    get: function() {
        return StripePaymentRepository;
    }
});
const _orderrepositoy = require("../../../application/ecommerce/ports/order.repositoy");
const _env = require("../../env");
const _common = require("@nestjs/common");
const _stripeservice = require("./stripe.service");
const _order = require("../../../domain/ecommerce/order");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let StripePaymentRepository = class StripePaymentRepository {
    async generateUrl(orderId) {
        const order = await this.orderRepository.findById(orderId);
        const settingsUrl = this.envService.get("CHECKOUT_SUCCESS_URL");
        if (!order) {
            throw new Error("Order not found");
        }
        const stripeSession = await this.stripe.checkout.sessions.create({
            success_url: settingsUrl,
            cancel_url: settingsUrl,
            payment_method_types: [
                "card"
            ],
            mode: "payment",
            billing_address_collection: "auto",
            // customer_email: 'test@gmail.com', // this system doesn't have email
            line_items: order.orderProduct.map((item)=>{
                return {
                    price_data: {
                        currency: "USD",
                        product_data: {
                            name: item.product
                        },
                        unit_amount: item.price * 100
                    },
                    quantity: 1
                };
            }),
            metadata: {
                orderId: order.id
            }
        });
        return stripeSession.url || "";
    }
    constructEvent({ req, signature }) {
        let event;
        try {
            event = this.stripe.webhooks.constructEvent(req, signature, this.envService.get("STRIPE_WEBHOOK_SECRET"));
        } catch (error) {
            throw new Error("Webhook error");
        }
        return event;
    }
    async complete(orderData) {
        const event = this.constructEvent(orderData);
        const session = event.data.object;
        if (event.type === "checkout.session.completed") {
            try {
                const paymentIntentId = await this.stripe.checkout.sessions.retrieve(session.id);
                const orderId = session?.metadata?.orderId;
                if (!orderId) {
                    throw new Error("Invalid event: orderId not found");
                }
                const order = await this.orderRepository.findById(orderId);
                if (order.status === "paid") {
                    throw new Error("Order already paid");
                }
                const updatedOrder = await this.orderRepository.update(orderId, new _order.Order({
                    ...order.currentState,
                    status: 'paid',
                    paymentId: paymentIntentId.id,
                    paymentMethod: "stripe"
                }));
                return updatedOrder;
            } catch (error) {
                throw new Error("Invalid event: subscription not found");
            }
        }
    }
    constructor(orderRepository, stripeService, envService){
        this.orderRepository = orderRepository;
        this.stripeService = stripeService;
        this.envService = envService;
        this.stripe = this.stripeService.getInstance();
    }
};
StripePaymentRepository = _ts_decorate([
    (0, _common.Injectable)(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof _orderrepositoy.OrderRepository === "undefined" ? Object : _orderrepositoy.OrderRepository,
        typeof _stripeservice.StripeService === "undefined" ? Object : _stripeservice.StripeService,
        typeof _env.EnvService === "undefined" ? Object : _env.EnvService
    ])
], StripePaymentRepository);

//# sourceMappingURL=stripe-payment.repositoy.js.map