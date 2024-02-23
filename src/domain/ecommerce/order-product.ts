import { Entity } from "@app/core/entities/entity";

export interface OrderProductProps {
    id?: string
    productId: string
    orderId: string
    price: number
}

export class OrderProduct extends Entity<OrderProductProps> {
    constructor(props: OrderProductProps) {
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
