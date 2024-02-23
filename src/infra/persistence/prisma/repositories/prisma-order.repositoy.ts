import { OrderRepository } from "@app/application/ecommerce/ports/order.repositoy";
import { Order } from "@app/domain/ecommerce/order";
import { Injectable } from "@nestjs/common";
import { PrismaOrderMapper } from "../mapper/prisma-order-mapper";
import { PrismaService } from "../prisma.service";
import { OrderProductRepository } from "@app/application/ecommerce/ports/order-product.repositoy";

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
    constructor(
        private prisma: PrismaService,
        private orderProductRepository: OrderProductRepository
    ) { }

    async findMany(): Promise<Order[]> {
        const orders = await this.prisma.order.findMany();

        return orders.map((item) => PrismaOrderMapper.toDomain(item));
    }

    async create(orderInput: Order): Promise<Order> {
        const data = PrismaOrderMapper.toPrisma(orderInput);
        const order = await this.prisma.order.create({
            data,
            include: {
                OrderProduct: true
            }
        });

        const orderProduct = await this.orderProductRepository.createMany(
            orderInput.orderProduct
        )

        order.OrderProduct = orderProduct;

        // reduce amount of product in stock

        return PrismaOrderMapper.toDomain(order);
    }
}