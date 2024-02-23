import { OrderProduct } from "@app/domain/ecommerce/order-product";

export abstract class OrderProductRepository {
    abstract createMany(data: OrderProduct[]): Promise<OrderProduct[]>;
}
