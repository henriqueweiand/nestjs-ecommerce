import { ProductRepository } from "@app/application/ecommerce/ports/product.repositoy";
import { Product } from "@app/domain/ecommerce/product";
import { Injectable } from "@nestjs/common";
import { PrismaProductMapper } from "../mapper/prisma-product-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaProductRepository implements ProductRepository {
    constructor(private prisma: PrismaService) { }

    async findMany(): Promise<Product[]> {
        const products = await this.prisma.product.findMany();

        return products.map((item) => PrismaProductMapper.toDomain(item));
    }

    async create(product: Product): Promise<Product> {
        const data = PrismaProductMapper.toPrisma(product);
        const entity = await this.prisma.product.create({ data });

        return PrismaProductMapper.toDomain(entity);
    }
}