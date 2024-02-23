import { User } from '@app/domain/ecommerce/user'
import { Prisma, User as PrismaUser } from '@prisma/client'

export class PrismaUserMapper {
  static toDomain(entity: PrismaUser): User {
    const model = new User({
      id: entity.id,
      name: entity.name,
    });
    return model;
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      name: user.name,
    }
  }
}
