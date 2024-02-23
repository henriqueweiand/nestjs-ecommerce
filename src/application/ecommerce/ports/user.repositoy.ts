import { User } from "@app/domain/ecommerce/User";

export abstract class UserRepository {
    abstract findMany(): Promise<User[]>;
    abstract create(data: User): Promise<User>;
}
