import { User } from '@app/domain/ecommerce/user';
import { Order } from '../entities/order.entity';
import { User as UserDocument } from '../entities/user.entity';
import { MongooseOrderMapper } from './mongoose-order-mapper';

type UserWithOrderDocument = UserDocument & { orders?: Order[] }

export class MongooseUserDetailsMapper {
  static toDomain(entity: UserWithOrderDocument): User {
    const model = new User({
      id: entity._id.toString(),
      name: entity.name,
      orders: !!entity.orders ? entity.orders.map((order) => MongooseOrderMapper.toDomain(order)) : [],
    });
    return model;
  }
}
