import { Module } from '@nestjs/common';
import { CacheManagerModule } from '@app/infra/persistence/cache/cache.module';
import { OrderController } from './order.controller';
import { ProductController } from './product.controller';
import { UserController } from './user.controller';

import { CreateOrderUseCase } from '@app/application/ecommerce/use-case/create-order';
import { CreateProductUseCase } from '@app/application/ecommerce/use-case/create-product';
import { CreateUserUseCase } from '@app/application/ecommerce/use-case/create-user';
import { GetOrderUseCase } from '@app/application/ecommerce/use-case/get-order';
import { GetProductUseCase } from '@app/application/ecommerce/use-case/get-product';
import { GetUserUseCase } from '@app/application/ecommerce/use-case/get-user';
import { CheckoutUrlUseCase } from '@app/application/ecommerce/use-case/checkout-url';
import { CheckoutController } from './checkout.controller';
import { PaymentModule } from '../payment/payment.module';
import { GetOrdersUseCase } from '@app/application/ecommerce/use-case/get-orders';
import { CheckoutCompleteUseCase } from '@app/application/ecommerce/use-case/checkout-complete';

@Module({
  imports: [PaymentModule, CacheManagerModule],
  controllers: [ProductController, UserController, OrderController, CheckoutController],
  providers: [CreateProductUseCase, GetProductUseCase, CreateUserUseCase, GetUserUseCase, GetOrderUseCase, GetOrdersUseCase, CreateOrderUseCase, CheckoutUrlUseCase, CheckoutCompleteUseCase],
  exports: [],
})
export class HttpModule { }
