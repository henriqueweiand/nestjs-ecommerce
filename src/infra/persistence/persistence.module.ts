import { ProductRepository } from '@app/application/ecommerce/ports/product.repositoy';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

// Non exported
import { PrismaProductRepository } from './prisma/repositories/prisma-product.repositoy';
import { UserRepository } from '@app/application/ecommerce/ports/user.repositoy';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repositoy';
import { OrderRepository } from '@app/application/ecommerce/ports/order.repositoy';
import { PrismaOrderRepository } from './prisma/repositories/prisma-order.repositoy';
import { OrderProductRepository } from '@app/application/ecommerce/ports/order-product.repositoy';
import { PrismaOrderProductRepository } from './prisma/repositories/prisma-order-product.repositoy';

@Module({
    providers: [
        PrismaService,
        {
            provide: ProductRepository,
            useClass: PrismaProductRepository
        },
        {
            provide: UserRepository,
            useClass: PrismaUserRepository
        },
        {
            provide: OrderRepository,
            useClass: PrismaOrderRepository
        },
        {
            provide: OrderProductRepository,
            useClass: PrismaOrderProductRepository
        },
    ],
    exports: [PrismaService, ProductRepository, UserRepository, OrderRepository, OrderProductRepository],
})
export class PersistenceModule { }
