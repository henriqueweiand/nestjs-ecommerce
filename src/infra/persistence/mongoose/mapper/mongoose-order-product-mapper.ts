import { OrderProduct } from '@app/domain/ecommerce/order-product';
import { OrderProduct as OrderProductDocument } from '../entities/order-product.entity';

export class MongooseOrderProductMapper {
  static toDomain(entity: OrderProductDocument): OrderProduct {
    const model = new OrderProduct({
      id: entity._id.toString(),
      product: entity.product.toString(),
      price: entity.price,
    });
    return model;
  }

  static toMongoose(
    orderProducts: OrderProduct,
  ): any {
    return {
      price: orderProducts.price,
      product: orderProducts.product,
    }
  }
}
