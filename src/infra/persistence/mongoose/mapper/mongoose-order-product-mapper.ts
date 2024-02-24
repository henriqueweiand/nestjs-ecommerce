import { OrderProduct } from '@app/domain/ecommerce/order-product';
import { OrderProductDocument } from '../entities/order-product.entity';

export class MongooseOrderProductMapper {
  static toDomain(entity: OrderProductDocument): OrderProduct {
    const model = new OrderProduct({
      id: entity.id,
      productId: entity.productId,
      orderId: entity.orderId,
      price: entity.price,
    });
    return model;
  }

  static toMongooseCreateMany(
    orderProducts: OrderProduct[],
  ): any[] {
    return orderProducts.map((product) => ({
      productId: product.productId,
      orderId: product.orderId,
      price: product.price,
    }));
  }
}
