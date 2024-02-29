import { UserRepository } from "@app/application/ecommerce/ports/user.repositoy";
import { User } from "@app/domain/ecommerce/user";
import { Injectable } from "@nestjs/common";
import { PrismaUserMapper } from "../mapper/prisma-user-mapper";
import { PrismaService } from "../prisma.service";
import { PrismaUserDetailsMapper } from "../mapper/prisma-user-details-mapper";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) { }

    async findMany(): Promise<User[]> {
        const users = await this.prisma.user.findMany({
            include: {
                orders: true
            }
        });

        return users.map((item) => PrismaUserDetailsMapper.toDomain(item));
    }

    async create(user: User): Promise<User> {
        const data = PrismaUserMapper.toPrisma(user);
        const entity = await this.prisma.user.create({ data });

        return PrismaUserMapper.toDomain(entity);
    }

    async appendOrder(userId: string, orderId: string): Promise<User> {
        const user = await this.prisma.user.update({
            where: { id: userId },
            data: {
                orders: {
                    connect: { id: orderId }
                }
            }
        });

        return PrismaUserMapper.toDomain(user);
    }
}