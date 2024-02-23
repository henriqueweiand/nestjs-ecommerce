import { ProductRepository } from "@app/application/product/ports/product.repositoy";
import { Product } from "@app/domain/product/product";
import { PrismaProductMapper } from "../mapper/prisma-product-mapper";
import { PrismaService } from "../prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaProductRepository implements ProductRepository {
    constructor(private prisma: PrismaService) { }

    async findMany(): Promise<Product[]> {
        const products = await this.prisma.product.findMany();

        return products.map((item) => PrismaProductMapper.toDomain(item));
    }

    async create(product2: Product): Promise<Product> {
        const data = PrismaProductMapper.toPrisma(product2);

        const entity = await this.prisma.product.create({ data });

        return PrismaProductMapper.toDomain(entity);
    }
}