import { Order } from '@app/domain/ecommerce/order';
import { Prisma, Order as PrismaOrder } from '@prisma/client';

export class PrismaOrderMapper {
  static toDomain(entity: PrismaOrder): Order {
    const model = new Order({
      id: entity.id,
      user: entity.user,
      total: entity.total,
      paymentId: entity.paymentId,
      paymentMethod: entity.paymentMethod
    });
    return model;
  }

  static toPrisma(order: Order): Prisma.OrderUncheckedCreateInput {
    return {
      user: order.user,
      total: order.total,
      id: order.id,
      paymentId: order?.paymentId,
      paymentMethod: order?.paymentMethod
    }
  }
}
