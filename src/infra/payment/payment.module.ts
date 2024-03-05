import { Module } from '@nestjs/common';
import { StripeModule } from './stripe/stripe.module';

@Module({
    imports: [StripeModule],
    exports: [StripeModule],
})
export class PaymentModule { }
