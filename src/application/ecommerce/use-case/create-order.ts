import { Order } from '@app/domain/ecommerce/order';
import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../ports/order.repositoy';
import { OrderProduct } from '@app/domain/ecommerce/order-product';

interface CreateOrderUseCaseCommand {
  userId: string,
  total: number,
  orderProduct: OrderProduct[]
}

@Injectable()
export class CreateOrderUseCase {
  constructor(private orderRepository: OrderRepository) { }

  async execute({
    userId,
    total,
    orderProduct
  }: CreateOrderUseCaseCommand): Promise<Order> {

    const order = new Order({
      userId,
      total,
      orderProduct
    })

    const response = await this.orderRepository.create(order)

    return response;
  }
}
