import { Entity } from "@app/core/entities/entity";

export interface OrderProps {
    id?: string
    productId: string
    orderId: string
    price: number
}

export class Order extends Entity<OrderProps> {
    constructor(props: OrderProps) {
        super(props);
    }

    get id(): string {
        return this.props.id;
    }

    get productId(): string {
        return this.props.productId;
    }

    get orderId(): string {
        return this.props.orderId;
    }

    get price(): number {
        return this.props.price;
    }
}
