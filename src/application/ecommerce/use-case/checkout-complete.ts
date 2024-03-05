import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { PaymentRepository } from '../ports/payment.repositoy';

type CheckoutCompleteUseCaseCommand = {
  headers: Request['headers'],
  body: Request['body']
}

@Injectable()
export class CheckoutCompleteUseCase {
  constructor(
    private paymentRepository: PaymentRepository,
  ) { }

  /*
    * This method is not abstracted, but it is a good example of how to handle webhooks in a controller.
    */
  async execute({ headers, body }: CheckoutCompleteUseCaseCommand): Promise<any> {
    const signature = headers['stripe-signature'];

    if (!signature) {
      throw new Error('Invalid signature');
    }

    const payment = await this.paymentRepository.complete({
      signature,
      body
    });

    return payment;
  }
}
