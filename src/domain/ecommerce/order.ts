import { Entity } from "@app/core/entities/entity";
import { OrderProduct } from "./order-product";
import { randomUUID } from "crypto";

export interface OrderProps {
    id?: string
    userId: string
    total: number
    orderProduct?: OrderProduct[]
}

export class Order extends Entity<OrderProps> {
    constructor(props: OrderProps) {
        props.id = props.id ?? randomUUID();
        props.total = props.total ?? 0;
        props.orderProduct = props.orderProduct ?? [];

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

    get orderProduct(): OrderProduct[] {
        return this.props.orderProduct
    }

    set orderProduct(orderProduct: OrderProduct[]) {
        this.props.orderProduct = orderProduct
    }

    set total(total: number) {
        this.props.total = total
    }
}
