import { Entity } from "@app/core/entities/entity";

export interface UserProps {
    id?: string
    name: string
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
}
