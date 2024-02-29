import { Order } from '@app/domain/ecommerce/order';
import { Injectable } from '@nestjs/common';
import { OrderRepository } from '../ports/order.repositoy';
import { OrderProduct } from '@app/domain/ecommerce/order-product';

interface CreateOrderUseCaseCommand {
  user: string,
  orderProduct: Pick<OrderProduct, 'product' | 'price'>[]
}

@Injectable()
export class CreateOrderUseCase {
  constructor(
    private orderRepository: OrderRepository,
  ) { }

  async execute({
    user,
    orderProduct
  }: CreateOrderUseCaseCommand): Promise<Order> {
    let total = 0;
    const order = new Order({
      user,
    })

    const createdOrderProduct = orderProduct.map((product) => {
      total += product.price;

      return new OrderProduct({
        product: product.product,
        price: product.price,
      });
    });

    order.total = total;
    order.orderProduct = createdOrderProduct;

    const createdOrder = await this.orderRepository.create(order)
    const response = await this.orderRepository.findById(createdOrder.id);

    return response;
  }
}
