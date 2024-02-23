import { Entity } from "@app/core/entities/entity";

export interface ProductProps {
    id?: string
    title: string
    quantityAvailable: number
    price: number
}

export class Product extends Entity<ProductProps> {
    constructor(props: ProductProps) {
        super(props);
    }

    get id(): string {
        return this.props.id;
    }

    get title(): string {
        return this.props.title;
    }

    get quantityAvailable(): number {
        return this.props.quantityAvailable;
    }

    get price(): number {
        return this.props.price;
    }
}
