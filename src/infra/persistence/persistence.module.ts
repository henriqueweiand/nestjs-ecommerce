import { ProductRepository } from '@app/application/product/ports/product.repositoy';
import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

// Non exported
import { PrismaProductRepository } from './prisma/repositories/prisma-product.repositoy';

@Module({
    providers: [
        PrismaService,
        {
            provide: ProductRepository,
            useClass: PrismaProductRepository
        },
    ],
    exports: [PrismaService, ProductRepository],
})
export class PersistenceModule { }
