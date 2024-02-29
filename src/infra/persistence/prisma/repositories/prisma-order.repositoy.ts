import { OrderProductRepository } from "@app/application/ecommerce/ports/order-product.repositoy";
import { OrderRepository } from "@app/application/ecommerce/ports/order.repositoy";
import { Order } from "@app/domain/ecommerce/order";
import { Injectable } from "@nestjs/common";
import { PrismaOrderDetailsMapper } from "../mapper/prisma-order-details-mapper";
import { PrismaOrderMapper } from "../mapper/prisma-order-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaOrderRepository implements OrderRepository {
    constructor(
        private prisma: PrismaService,
        private orderProductRepository: OrderProductRepository
    ) { }

    async findMany(): Promise<Order[]> {
        const orders = await this.prisma.order.findMany({
            include: {
                orderProduct: true
            }
        });

        return orders.map((item) => PrismaOrderDetailsMapper.toDomain(item));
    }

    async findById(id: string): Promise<Order> {
        const order = await this.prisma.order.findFirst({
            where: {
                id
            },
            include: {
                orderProduct: true
            }
        });

        return PrismaOrderDetailsMapper.toDomain(order);
    }

    async create(orderInput: Order): Promise<Order> {
        const data = PrismaOrderMapper.toPrisma(orderInput);

        const orderProducts = orderInput.orderProduct.map(orderProduct => ({
            productId: orderProduct.product,
            price: orderProduct.price
        }));

        const order = await this.prisma.order.create({
            data: {
                ...data,
                orderProduct: {
                    create: orderProducts
                }
            },
            include: {
                orderProduct: true
            }
        });

        return PrismaOrderMapper.toDomain(order);
    }
}