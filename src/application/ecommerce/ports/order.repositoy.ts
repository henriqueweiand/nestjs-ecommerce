import { Order } from "@app/domain/ecommerce/order";

export abstract class OrderRepository {
    abstract findMany(): Promise<Order[]>;
    abstract create(data: Order): Promise<Order>;
}
