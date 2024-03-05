import { OrderProductRepository } from "@app/application/ecommerce/ports/order-product.repositoy";
import { OrderRepository } from "@app/application/ecommerce/ports/order.repositoy";
import { UserRepository } from "@app/application/ecommerce/ports/user.repositoy";
import { Order } from "@app/domain/ecommerce/order";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import mongoose, { Model } from "mongoose";
import { Order as OrderMongoose } from "../entities/order.entity";
import { MongooseOrderMapper } from "../mapper/mongoose-order-mapper";
import { MongooseOrderDetailsMapper } from "../mapper/mongoose-order-details-mapper";

@Injectable()
export class MongooseOrderRepository implements OrderRepository {
    constructor(
        @InjectModel(OrderMongoose.name) private readonly orderModel: Model<OrderMongoose>,
        private orderProductRepository: OrderProductRepository,
        private userRepository: UserRepository
    ) { }

    async findMany(): Promise<Order[]> {
        const findQuery = await this.orderModel
            .find()
            .populate(['orderProduct']);

        return findQuery.map((item) => MongooseOrderDetailsMapper.toDomain(item));
    }

    async findById(id: string): Promise<Order> {
        const findQuery = await this.orderModel
            .findById(id)
            .populate(['orderProduct']);

        return MongooseOrderDetailsMapper.toDomain(findQuery);
    }

    async create(orderInput: Order): Promise<Order> {
        let orderProductIds = [];

        if (orderInput?.orderProduct.length) {
            orderProductIds = await Promise.all(
                orderInput.orderProduct.map(async (orderProduct) => {
                    const orderProductCreated = await this.orderProductRepository.create(orderProduct);
                    return orderProductCreated.id;
                })
            );
        }

        const data = MongooseOrderMapper.toMongoose(orderInput);
        const order = new this.orderModel({
            ...data,
            user: {
                "_id": new mongoose.Types.ObjectId(orderInput.user),
            },
            orderProduct: orderProductIds,
        });

        await this.userRepository.appendOrder(orderInput.user, order.id);

        const savedOrder = await order.save();

        return MongooseOrderMapper.toDomain(savedOrder);
    }

    async update(orderId: string, orderInput: Order): Promise<Order> {
        const preparedData = MongooseOrderMapper.toMongoose(orderInput);

        const order = await this.orderModel
            .findOneAndUpdate(
                {
                    _id: orderId,
                },
                preparedData,
                {
                    new: true,
                },
            )
            .exec();

        return MongooseOrderMapper.toDomain(order);
    }
}