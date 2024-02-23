import { ProductController } from '@app/infra/http/product.controller';
import { PersistenceModule } from '@app/infra/persistence/persistence.module';
import { Module } from '@nestjs/common';
import { CreateProductUseCase } from './use-case/create-product';
import { GetProductUseCase } from './use-case/get-product';
import { GetUserUseCase } from './use-case/get-user';
import { CreateUserUseCase } from './use-case/create-user';
import { UserController } from '@app/infra/http/user.controller';

@Module({
    imports: [PersistenceModule],
    controllers: [ProductController, UserController],
    providers: [CreateProductUseCase, GetProductUseCase, GetUserUseCase, CreateUserUseCase],
})
export class ProductModule { }
