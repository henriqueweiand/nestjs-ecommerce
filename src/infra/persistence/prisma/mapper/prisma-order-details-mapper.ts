import { Order } from '@app/domain/ecommerce/order';
import { OrderProduct, Order as PrismaOrder } from '@prisma/client';
import { PrismaOrderProductMapper } from './prisma-order-product-mapper';

type OrderWithOrderProduct = PrismaOrder & { orderProduct?: OrderProduct[] };

export class PrismaOrderDetailsMapper {
  static toDomain(entity: OrderWithOrderProduct): Order {
    const model = new Order({
      id: entity.id,
      user: entity.user,
      total: entity.total,
      orderProduct: !!entity.orderProduct ? entity.orderProduct.map((item) => PrismaOrderProductMapper.toDomain(item)) : []
    });
    return model;
  }
}
