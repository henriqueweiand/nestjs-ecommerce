import { User } from '@app/domain/ecommerce/user';
import { Order, User as PrismaUser } from '@prisma/client';
import { PrismaOrderMapper } from './prisma-order-mapper';

type UserWithOrder = PrismaUser & { orders?: Order[] };

export class PrismaUserDetailsMapper {
  static toDomain(entity: UserWithOrder): User {
    const model = new User({
      id: entity.id,
      name: entity.name,
      orders: !!entity.orders ? entity.orders.map((item) => PrismaOrderMapper.toDomain(item)) : []
    });
    return model;
  }
}
