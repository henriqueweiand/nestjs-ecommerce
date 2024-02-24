import { UserRepository } from "@app/application/ecommerce/ports/user.repositoy";
import { User } from "@app/domain/ecommerce/user";
import { User as UserMongoose } from "../entities/user.entity";
import { Injectable } from "@nestjs/common";
import { MongooseUserMapper } from "../mapper/mongoose-user-mapper";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class MongooseUserRepository implements UserRepository {
    constructor(
        @InjectModel(UserMongoose.name) private readonly userModel: Model<UserMongoose>,
    ) { }

    async findMany(): Promise<User[]> {
        const users = await this.userModel.find();

        return users.map((item) => MongooseUserMapper.toDomain(item));
    }

    async create(user: User): Promise<User> {
        const data = MongooseUserMapper.toMongoose(user);
        const entity = await this.userModel.create(data);

        return MongooseUserMapper.toDomain(entity);
    }
}