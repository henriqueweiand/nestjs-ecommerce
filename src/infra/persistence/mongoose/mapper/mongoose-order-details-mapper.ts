import { Order } from '@app/domain/ecommerce/order';
import { Order as OrderDocument } from '../entities/order.entity';
import { OrderProduct as OrderProductDocument } from '../entities/order-product.entity';
import { MongooseOrderProductMapper } from './mongoose-order-product-mapper';

type OrderWithOrderProductsDocument = OrderDocument & { orderProduct?: OrderProductDocument[] }

export class MongooseOrderDetailsMapper {
  static toDomain(entity: OrderWithOrderProductsDocument): Order {
    const model = new Order({
      id: entity._id.toString(),
      user: entity.user.toString(),
      total: entity.total,
      orderProduct: !!entity.orderProduct ? entity.orderProduct.map((order) => MongooseOrderProductMapper.toDomain(order)) : [],
      status: entity.status,
      paymentId: entity.paymentId,
      paymentMethod: entity.paymentMethod,
    });
    return model;
  }
}
