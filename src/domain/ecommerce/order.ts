import { Entity } from "@app/core/entities/entity";

export interface OrderProps {
    id?: string
    userId: string
    total: number
}

export class Order extends Entity<OrderProps> {
    constructor(props: OrderProps) {
        super(props);
    }

    get id(): string {
        return this.props.id;
    }

    get userId(): string {
        return this.props.userId;
    }

    get total(): number {
        return this.props.total;
    }
}
