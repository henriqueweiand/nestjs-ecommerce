import { Injectable } from '@nestjs/common';
import { PaymentRepository } from '../ports/payment.repositoy';

@Injectable()
export class CheckoutUrlUseCase {
  constructor(
    private paymentRepository: PaymentRepository
  ) { }

  async execute(orderId: string): Promise<string> {
    const URL = await this.paymentRepository.generateUrl(orderId);

    return URL;
  }
}
