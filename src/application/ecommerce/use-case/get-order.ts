import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../ports/order.repositoy';

interface GetOrderUseCaseCommand { }

@Injectable()
export class GetOrderUseCase {
  constructor(private orderRepository: OrderRepository) { }

  async execute({ }: GetOrderUseCaseCommand): Promise<any> {
    const response = await this.orderRepository.findMany()

    return response;
  }
}
