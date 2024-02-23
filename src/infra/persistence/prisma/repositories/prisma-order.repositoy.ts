import { OrderRepository } from "@app/application/ecommerce/ports/order.repositoy";
import { Order } from "@app/domain/ecommerce/order";
import { Injectable } from "@nestjs/common";
import { PrismaOrderMapper } from "../mapper/prisma-order-mapper";
import { PrismaService } from "../prisma.service";
import { PrismaOrderProductMapper } from "../mapper/prisma-order-product-mapper";

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
    constructor(private prisma: PrismaService) { }

    async findMany(): Promise<Order[]> {
        const orders = await this.prisma.order.findMany();

        return orders.map((item) => PrismaOrderMapper.toDomain(item));
    }

    async create(order: Order): Promise<Order> {
        const total = order.orderProduct.reduce((acc, item) => acc + item.price, 0);
        const data = PrismaOrderMapper.toPrisma(order);

        data.OrderProduct = {
            create: order.orderProduct.map((item) => PrismaOrderProductMapper.toPrisma(item))
        };
        data.total = total;

        const entity = await this.prisma.order.create({
            data,
            include: order.orderProduct && order.orderProduct.length > 0 ? { OrderProduct: true } : undefined
        });

        return PrismaOrderMapper.toDomain(entity);
    }
}