import { OrderProduct } from '@app/domain/ecommerce/order-product'
import { Prisma, OrderProduct as PrismaOrderProduct } from '@prisma/client'

export class PrismaOrderProductMapper {
  static toDomain(entity: PrismaOrderProduct): OrderProduct {
    const model = new OrderProduct({
      id: entity.id,
      productId: entity.productId,
      orderId: entity.orderId,
      price: entity.price,
    });
    return model;
  }

  static toPrisma(order: OrderProduct): Prisma.OrderProductUncheckedCreateInput {
    return {
      productId: order.productId,
      orderId: order.orderId,
      price: order.price,
    }
  }
}
