import { OrderProduct } from "@app/domain/ecommerce/order-product";

export abstract class OrderProductRepository {
    abstract create(data: OrderProduct): Promise<OrderProduct>;
    abstract createMany(data: OrderProduct[]): Promise<OrderProduct[]>;
}
