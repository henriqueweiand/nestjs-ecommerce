import { Product } from '@app/domain/ecommerce/product';
import { Product as ProductDocument } from "../entities/product.entity";

export class MongooseProductMapper {
  static toDomain(entity: ProductDocument): Product {
    const model = new Product({
      id: entity._id.toString(),
      title: entity.title,
      price: entity.price,
    });
    return model;
  }

  static toMongoose(product: Product) {
    return {
      title: product.title,
      price: product.price,
    }
  }
}
