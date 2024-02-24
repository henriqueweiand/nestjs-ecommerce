import { Order } from '@app/domain/ecommerce/order'
import { MongooseOrderProductMapper } from './mongoose-order-product-mapper';
import { OrderDocument } from '../entities/order.entity';

export class MongooseOrderMapper {
  static toDomain(entity: OrderDocument): Order {
    const model = new Order({
      id: entity.id,
      userId: entity.userId,
      total: entity.total,
      orderProduct: entity.OrderProduct.map((item) => MongooseOrderProductMapper.toDomain(item))
    });
    return model;
  }

  static toPrisma(order: Order) {
    return {
      userId: order.userId,
      total: order.total,
      id: order.id,
    }
  }
}
