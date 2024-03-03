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

@Module({
  imports: [CacheManagerModule],
  controllers: [ProductController, UserController, OrderController],
  providers: [CreateProductUseCase, GetProductUseCase, CreateUserUseCase, GetUserUseCase, GetOrderUseCase, CreateOrderUseCase],
  exports: [],
})
export class HttpModule { }
