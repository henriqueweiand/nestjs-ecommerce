import { Order } from '@app/domain/ecommerce/order'
import { Prisma, Order as PrismaOrder } from '@prisma/client'

export class PrismaOrderMapper {
  static toDomain(entity: PrismaOrder): Order {
    const model = new Order({
      id: entity.id,
      userId: entity.userId,
      total: entity.total,
    });
    return model;
  }

  static toPrisma(order: Order): Prisma.OrderUncheckedCreateInput {
    return {
      userId: order.userId,
      total: order.total,
    }
  }
}
