import { ProductController } from '@app/infra/http/product.controller';
import { PersistenceModule } from '@app/infra/persistence/persistence.module';
import { Module } from '@nestjs/common';
import { CreateProductUseCase } from './use-case/create-product';

@Module({
    imports: [PersistenceModule],
    controllers: [ProductController],
    providers: [CreateProductUseCase],
})
export class ProductModule { }
