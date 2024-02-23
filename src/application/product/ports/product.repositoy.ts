import { Product } from "@app/domain/product/product";

export abstract class ProductRepository {
    abstract findMany(questionId: string): Promise<Product[]>;
    abstract create(data: any): Promise<Product>;
}
