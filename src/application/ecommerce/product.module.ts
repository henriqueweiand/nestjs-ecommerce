import { ProductController } from '@app/infra/http/product.controller';
import { Module } from '@nestjs/common';
import { CreateProductUseCase } from './use-case/create-product';
import { GetProductUseCase } from './use-case/get-product';
import { MongooseModule } from '@app/infra/persistence/mongoose/mongoose.module';

@Module({
    imports: [MongooseModule],
    controllers: [ProductController],
    providers: [CreateProductUseCase, GetProductUseCase],
})
export class ProductModule { }
