import { Entity } from "@app/core/entities/entity";
import { OrderProduct } from "./order-product";

export interface OrderProps {
    id?: string;
    user: string
    total?: number
    orderProduct?: OrderProduct[]
}

export class Order extends Entity<OrderProps> {
    constructor(props: OrderProps) {
        props.total = props.total ?? 0;

        super(props);
    }

    get id(): string {
        return this.props.id;
    }

    get user(): string {
        return this.props.user;
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
