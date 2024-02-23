import { Order } from '@app/domain/ecommerce/order'
import { OrderProduct, Prisma, Order as PrismaOrder } from '@prisma/client'
import { PrismaOrderProductMapper } from './prisma-order-product-mapper';

type OrderWithOrderProduct = PrismaOrder & { OrderProduct?: OrderProduct[] };

export class PrismaOrderMapper {
  static toDomain(entity: OrderWithOrderProduct): Order {
    const model = new Order({
      id: entity.id,
      userId: entity.userId,
      total: entity.total,
      orderProduct: entity.OrderProduct.map((item) => PrismaOrderProductMapper.toDomain(item))
    });
    return model;
  }

  static toPrisma(order: Order): Prisma.OrderUncheckedCreateInput {
    return {
      userId: order.userId,
      total: order.total,
      id: order.id,
    }
  }
}
