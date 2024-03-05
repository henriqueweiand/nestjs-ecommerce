import { PaymentRepository } from '@app/application/ecommerce/ports/payment.repositoy';
import { Module } from '@nestjs/common';

// Non exported
import { StripePaymentRepository } from './stripe-payment.repositoy';
import { EnvModule } from '@app/infra/env';
import { StripeService } from './stripe.service';

@Module({
    imports: [
        EnvModule
    ],
    providers: [
        StripeService,
        {
            provide: PaymentRepository,
            useClass: StripePaymentRepository
        },
    ],
    exports: [PaymentRepository],
})
export class StripeModule { }
