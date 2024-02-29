import { ProductController } from '@app/infra/http/product.controller';
import { Module } from '@nestjs/common';
import { CreateProductUseCase } from './use-case/create-product';
import { GetProductUseCase } from './use-case/get-product';
// import { MongooseModule } from '@app/infra/persistence/mongoose/mongoose.module';
import { UserController } from '@app/infra/http/user.controller';
import { CreateUserUseCase } from './use-case/create-user';
import { GetUserUseCase } from './use-case/get-user';
import { OrderController } from '@app/infra/http/order.controller';
import { GetOrderUseCase } from './use-case/get-order';
import { CreateOrderUseCase } from './use-case/create-order';
import { PrismaModule } from '@app/infra/persistence/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    controllers: [ProductController, UserController, OrderController],
    providers: [CreateProductUseCase, GetProductUseCase, CreateUserUseCase, GetUserUseCase, GetOrderUseCase, CreateOrderUseCase],
})
export class ProductModule { }
