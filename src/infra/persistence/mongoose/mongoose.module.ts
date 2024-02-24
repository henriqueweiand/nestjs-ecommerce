import { ProductRepository } from '@app/application/ecommerce/ports/product.repositoy';
import { EnvModule, EnvService } from '@app/infra/env';
import { Module } from '@nestjs/common';
import { MongooseModule as MongooseModuleLib } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';

// Non exported
import { MongooseProductRepository } from './repositories/mongoose-product.repositoy';

@Module({
    imports: [
        MongooseModuleLib.forRootAsync({
            imports: [EnvModule],
            useFactory: (envService: EnvService) => ({
                uri: envService.get('MONGODB_URL'),
            }),
            inject: [EnvService],
        }),
        MongooseModuleLib.forFeature([{ name: Product.name, schema: ProductSchema }]),
    ],
    providers: [
        {
            provide: ProductRepository,
            useClass: MongooseProductRepository
        },
    ],
    exports: [ProductRepository],
})
export class MongooseModule { }
