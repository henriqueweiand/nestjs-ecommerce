import { OrderProductRepository } from "@app/application/ecommerce/ports/order-product.repositoy";
import { OrderProduct } from "@app/domain/ecommerce/order-product";
import { Injectable } from "@nestjs/common";
import { PrismaOrderProductMapper } from "../mapper/prisma-order-product-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaOrderProductRepository implements OrderProductRepository {
    constructor(
        private prisma: PrismaService,
    ) { }

    async create(orderProduct: OrderProduct): Promise<OrderProduct> {
        const data = PrismaOrderProductMapper.toPrisma(orderProduct);
        const createdOrderProduct = await this.prisma.orderProduct.create({ data });

        return PrismaOrderProductMapper.toDomain(createdOrderProduct);
    }

    async createMany(orderProducts: OrderProduct[]): Promise<OrderProduct[]> {
        if (orderProducts.length === 0) {
            return [];
        }

        const data = PrismaOrderProductMapper.toPrismaCreateMany(orderProducts);

        const createdOrderProducts = await this.prisma.$transaction(
            data.map((item) => this.prisma.orderProduct.create({ data: item }))
        );

        return createdOrderProducts.map(PrismaOrderProductMapper.toDomain);
    }
}