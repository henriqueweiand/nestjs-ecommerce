import { Order } from "@app/domain/ecommerce/order";

export abstract class PaymentRepository {
    abstract generateUrl(orderId: string): Promise<string>;
    abstract complete(paymentInput: any): Promise<Order>;
}
