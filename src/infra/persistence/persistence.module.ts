import { ProductRepository } from '@app/application/ecommerce/ports/product.repositoy';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

// Non exported
import { PrismaProductRepository } from './prisma/repositories/prisma-product.repositoy';
import { UserRepository } from '@app/application/ecommerce/ports/user.repositoy';
import { PrismaUserRepository } from './prisma/repositories/prisma-user.repositoy';

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
    ],
    exports: [PrismaService, ProductRepository, UserRepository],
})
export class PersistenceModule { }
