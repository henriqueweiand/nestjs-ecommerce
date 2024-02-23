import { UserRepository } from "@app/application/ecommerce/ports/user.repositoy";
import { User } from "@app/domain/ecommerce/user";
import { Injectable } from "@nestjs/common";
import { PrismaUserMapper } from "../mapper/prisma-user-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaUserRepository implements UserRepository {
    constructor(private prisma: PrismaService) { }

    async findMany(): Promise<User[]> {
        const users = await this.prisma.user.findMany();

        return users.map((item) => PrismaUserMapper.toDomain(item));
    }

    async create(user: User): Promise<User> {
        const data = PrismaUserMapper.toPrisma(user);
        const entity = await this.prisma.user.create({ data });

        return PrismaUserMapper.toDomain(entity);
    }
}