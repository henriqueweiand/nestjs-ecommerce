import { OrderRepository } from "@app/application/ecommerce/ports/order.repositoy";
import { Order } from "@app/domain/ecommerce/order";
import { Injectable } from "@nestjs/common";
import { PrismaOrderMapper } from "../mapper/prisma-order-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
    constructor(private prisma: PrismaService) { }

    async findMany(): Promise<Order[]> {
        const orders = await this.prisma.order.findMany();

        return orders.map((item) => PrismaOrderMapper.toDomain(item));
    }

    async create(order: Order): Promise<Order> {
        const data = PrismaOrderMapper.toPrisma(order);
        const entity = await this.prisma.order.create({ data });

        return PrismaOrderMapper.toDomain(entity);
    }
}