import { Injectable, RawBodyRequest } from '@nestjs/common';
import { Request } from 'express';
import { PaymentRepository } from '../ports/payment.repositoy';
import { Order } from '@app/domain/ecommerce/order';

type CheckoutCompleteUseCaseCommand = {
  headers: Request['headers'],
  req: RawBodyRequest<Request>
}

@Injectable()
export class CheckoutCompleteUseCase {
  constructor(
    private paymentRepository: PaymentRepository,
  ) { }

  /*
    * This method is not abstracted, but it is a good example of how to handle webhooks in a controller.
    */
  async execute({ headers, req }: CheckoutCompleteUseCaseCommand): Promise<Order> {
    const signature = headers['stripe-signature'];

    if (!signature) {
      throw new Error('Invalid signature');
    }

    const order = await this.paymentRepository.complete({
      signature,
      req: req.rawBody,
    });

    return order;
  }
}
