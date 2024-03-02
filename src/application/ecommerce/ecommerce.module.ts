import { ProductController } from '@app/infra/http/product.controller';
import { Module } from '@nestjs/common';
import { CreateProductUseCase } from './use-case/create-product';
import { GetProductUseCase } from './use-case/get-product';
import { OrderController } from '@app/infra/http/order.controller';
import { UserController } from '@app/infra/http/user.controller';
import { CreateOrderUseCase } from './use-case/create-order';
import { CreateUserUseCase } from './use-case/create-user';
import { GetOrderUseCase } from './use-case/get-order';
import { GetUserUseCase } from './use-case/get-user';

@Module({
    imports: [],
    controllers: [ProductController, UserController, OrderController],
    providers: [CreateProductUseCase, GetProductUseCase, CreateUserUseCase, GetUserUseCase, GetOrderUseCase, CreateOrderUseCase],
})
export class EcommerceModule { }
