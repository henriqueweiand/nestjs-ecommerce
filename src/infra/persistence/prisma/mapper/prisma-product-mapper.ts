import { Product } from '@app/domain/product/product'
import { Prisma, Product as PrismaProduct } from '@prisma/client'

export class PrismaProductMapper {
  static toDomain(entity: PrismaProduct): Product {
    const model = new Product({
      id: entity.id,
      title: entity.title,
    });
    return model;
  }

  static toPrisma(product: Product): Prisma.ProductUncheckedCreateInput {
    return {
      title: product.getTitle
    }
  }
}
