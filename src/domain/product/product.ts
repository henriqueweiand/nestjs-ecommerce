import { Entity } from "@app/core/entities/entity";

export interface ProductProps {
    title: string
    id?: string
}

export class Product extends Entity<ProductProps> {
    constructor(props: ProductProps) {
        super(props);
    }

    get getTitle() {
        return this.props.title
    }
}
