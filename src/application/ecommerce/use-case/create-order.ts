import { Order } from '@app/domain/ecommerce/order';
import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../ports/order.repositoy';

interface CreateOrderUseCaseCommand {
  userId: string,
  total: number,
}

@Injectable()
export class CreateOrderUseCase {
  constructor(private orderRepository: OrderRepository) { }

  async execute({
    userId,
    total,
  }: CreateOrderUseCaseCommand): Promise<any> {

    const order = new Order({
      userId,
      total,
    })

    const response = await this.orderRepository.create(order)

    return response;
  }
}
