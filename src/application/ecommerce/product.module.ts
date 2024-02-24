import { ProductController } from '@app/infra/http/product.controller';
import { Module } from '@nestjs/common';
import { CreateProductUseCase } from './use-case/create-product';
import { GetProductUseCase } from './use-case/get-product';
import { MongooseModule } from '@app/infra/persistence/mongoose/mongoose.module';
import { UserController } from '@app/infra/http/user.controller';
import { CreateUserUseCase } from './use-case/create-user';
import { GetUserUseCase } from './use-case/get-user';

@Module({
    imports: [MongooseModule],
    controllers: [ProductController, UserController],
    providers: [CreateProductUseCase, GetProductUseCase, CreateUserUseCase, GetUserUseCase],
})
export class ProductModule { }
