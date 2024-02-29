import { OrderProductRepository } from "@app/application/ecommerce/ports/order-product.repositoy";
import { OrderProduct } from "@app/domain/ecommerce/order-product";
import { OrderProduct as OrderProductMongoose } from "../entities/order-product.entity";
import { Injectable } from "@nestjs/common";
import { MongooseOrderProductMapper } from "../mapper/mongoose-order-product-mapper";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class MongooseOrderProductRepository implements OrderProductRepository {
    constructor(
        @InjectModel(OrderProductMongoose.name) private readonly productOrderModel: Model<OrderProductMongoose>
    ) { }

    async create(orderProduct: OrderProduct): Promise<OrderProduct> {
        const data = MongooseOrderProductMapper.toMongoose(orderProduct);
        const createdOrderProduct = await this.productOrderModel.create(data);

        return MongooseOrderProductMapper.toDomain(createdOrderProduct);
    }

    async createMany(orderProducts: OrderProduct[]): Promise<OrderProduct[]> {
        if (orderProducts.length === 0) {
            return [];
        }

        const data = orderProducts.map((product) => MongooseOrderProductMapper.toMongoose(product));
        const createdOrderProductProducts = await this.productOrderModel.create(data);

        return createdOrderProductProducts.map(MongooseOrderProductMapper.toDomain);
    }
}