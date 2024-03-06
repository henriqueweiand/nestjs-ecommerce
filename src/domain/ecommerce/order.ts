import { Entity } from "@app/core/entities/entity";
import { OrderProduct } from "./order-product";

export interface OrderProps {
    id?: string;
    user: string
    total?: number
    status?: "paid" | "open" | "canceled"
    paymentId?: string,
    paymentMethod?: "stripe" | "paddle" | "paypal" | "other", // It is only working with stripe for now
    orderProduct?: OrderProduct[]
}

export class Order extends Entity<OrderProps> {
    constructor(props: OrderProps) {
        props.total = props.total ?? 0;
        props.status = props.status ?? "open";

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

    get status(): "paid" | "open" | "canceled" {
        return this.props.status;
    }

    get paymentId(): string {
        return this.props.paymentId;
    }

    get paymentMethod(): "stripe" | "paddle" | "paypal" | "other" {
        return this.props.paymentMethod;
    }

    get currentState(): OrderProps {
        return this.props;
    }

    set status(status: "paid" | "open" | "canceled") {
        this.props.status = status;
    }

    set paymentId(paymentId: string) {
        this.props.paymentId = paymentId;
    }

    set paymentMethod(paymentMethod: "stripe" | "paddle" | "paypal" | "other") {
        this.props.paymentMethod = paymentMethod
    }

    set orderProduct(orderProduct: OrderProduct[]) {
        this.props.orderProduct = orderProduct
    }

    set total(total: number) {
        this.props.total = total
    }
}
