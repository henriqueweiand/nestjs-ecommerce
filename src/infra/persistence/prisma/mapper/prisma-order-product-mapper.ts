import { OrderProduct } from '@app/domain/ecommerce/order-product'
import { Prisma, OrderProduct as PrismaOrderProduct } from '@prisma/client'

export class PrismaOrderProductMapper {
  static toDomain(entity: PrismaOrderProduct): OrderProduct {
    const model = new OrderProduct({
      id: entity.id,
      product: entity.productId,
      orderId: entity.orderId,
      price: entity.price,
    });
    return model;
  }

  static toPrisma(
    orderProducts: OrderProduct,
  ): Prisma.OrderProductUncheckedCreateInput {
    return {
      productId: orderProducts.product,
      orderId: orderProducts.orderId,
      price: orderProducts.price,
    }
  }

  static toPrismaCreateMany(
    orderProducts: OrderProduct[],
  ): Prisma.OrderProductCreateManyInput[] {
    return orderProducts.map((product) => ({
      productId: product.product,
      orderId: product.orderId,
      price: product.price,
    }));
  }
}
