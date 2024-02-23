import { Product } from '@app/domain/ecommerce/product'
import { Prisma, Product as PrismaProduct } from '@prisma/client'

export class PrismaProductMapper {
  static toDomain(entity: PrismaProduct): Product {
    const model = new Product({
      id: entity.id,
      title: entity.title,
      quantityAvailable: entity.quantityAvailable,
      price: entity.price,
    });
    return model;
  }

  static toPrisma(product: Product): Prisma.ProductUncheckedCreateInput {
    return {
      title: product.title,
      quantityAvailable: product.quantityAvailable,
      price: product.price,
    }
  }
}
