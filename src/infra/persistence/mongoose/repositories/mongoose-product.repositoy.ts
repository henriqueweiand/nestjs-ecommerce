import { ProductRepository } from "@app/application/ecommerce/ports/product.repositoy";
import { Product } from "@app/domain/ecommerce/product";
import { Product as ProductMongoose } from "../entities/product.entity";
import { Injectable } from "@nestjs/common";
import { MongooseProductMapper } from "../mapper/mongoose-product-mapper";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class MongooseProductRepository implements ProductRepository {
    constructor(
        @InjectModel(ProductMongoose.name) private readonly productModel: Model<ProductMongoose>,
    ) { }

    async findMany(): Promise<Product[]> {
        const products = await this.productModel.find();

        return products.map((item) => MongooseProductMapper.toDomain(item));
    }

    async create(product: Product): Promise<Product> {
        const data = MongooseProductMapper.toMongoose(product);
        const entity = await this.productModel.create(data);

        return MongooseProductMapper.toDomain(entity);
    }
}