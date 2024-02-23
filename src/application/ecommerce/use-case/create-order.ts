import { Order } from '@app/domain/ecommerce/order';
import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../ports/order.repositoy';
import { OrderProduct } from '@app/domain/ecommerce/order-product';
import { OrderProductRepository } from '../ports/order-product.repositoy';

interface CreateOrderUseCaseCommand {
  userId: string,
  total: number,
  orderProduct: OrderProduct[]
}

@Injectable()
export class CreateOrderUseCase {
  constructor(
    private orderRepository: OrderRepository,
  ) { }

  async execute({
    userId,
    orderProduct
  }: CreateOrderUseCaseCommand): Promise<Order> {
    let total = 0;
    const order = new Order({
      userId,
      orderProduct,
      total: 0
    })

    const createdOrderProduct = orderProduct.map((product) => {
      total += product.price;

      return new OrderProduct({
        productId: product.productId,
        orderId: order.id,
        price: product.price,
      });
    })

    order.total = total;
    order.orderProduct = createdOrderProduct;

    const response = await this.orderRepository.create(order)

    return response;
  }
}
