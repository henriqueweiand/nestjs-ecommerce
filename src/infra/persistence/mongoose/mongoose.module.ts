import { ProductRepository } from '@app/application/ecommerce/ports/product.repositoy';
import { EnvModule, EnvService } from '@app/infra/env';
import { Module } from '@nestjs/common';
import { MongooseModule as MongooseModuleLib } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { UserRepository } from '@app/application/ecommerce/ports/user.repositoy';

// Non exported
import { MongooseProductRepository } from './repositories/mongoose-product.repositoy';
import { MongooseUserRepository } from './repositories/mongoose-user.repositoy';
import { User, UserSchema } from './entities/user.entity';

@Module({
    imports: [
        MongooseModuleLib.forRootAsync({
            imports: [EnvModule],
            useFactory: (envService: EnvService) => ({
                uri: envService.get('MONGODB_URL'),
            }),
            inject: [EnvService],
        }),
        MongooseModuleLib.forFeature([
            { name: Product.name, schema: ProductSchema },
            { name: User.name, schema: UserSchema }
        ]),
    ],
    providers: [
        {
            provide: ProductRepository,
            useClass: MongooseProductRepository
        },
        {
            provide: UserRepository,
            useClass: MongooseUserRepository
        },
    ],
    exports: [ProductRepository, UserRepository],
})
export class MongooseModule { }
