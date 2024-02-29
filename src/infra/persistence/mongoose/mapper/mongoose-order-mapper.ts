import { Order } from '@app/domain/ecommerce/order';
import { Order as OrderDocument } from '../entities/order.entity';

export class MongooseOrderMapper {
  static toDomain(entity: OrderDocument): Order {
    const model = new Order({
      id: entity._id.toString(),
      user: entity.user.toString(),
      total: entity.total,
    });
    return model;
  }

  static toMongoose(order: Order) {
    return {
      total: order.total,
      user: order.user,
    }
  }
}
