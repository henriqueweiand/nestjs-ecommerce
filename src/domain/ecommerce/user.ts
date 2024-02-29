import { Entity } from "@app/core/entities/entity";
import { Order } from "./order";

export interface UserProps {
    id?: string;
    name: string;
    orders?: Order[]
}

export class User extends Entity<UserProps> {
    constructor(props: UserProps) {
        super(props);
    }

    get id(): string {
        return this.props.id;
    }

    get name(): string {
        return this.props.name;
    }

    get order(): string[] {
        return this.order;
    }

    get currentState(): UserProps {
        return this.props;
    }
}
