import { Product } from '@app/domain/ecommerce/product';
import { OrderDocument } from "../entities/product.entity";

export class MongooseProductMapper {
  static toDomain(entity: OrderDocument): Product {
    const model = new Product({
      id: entity.id,
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
