import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
    @ApiProperty({
        default: '18d33ad3-5906-4c0c-9c49-3b1e60b6105e'
    })
    @IsString()
    @IsNotEmpty()
    userId: string;

    @ApiProperty({
        default: 30
    })
    @IsNumber()
    @IsNotEmpty()
    total: number;

    @ApiProperty({
        required: true,
        type: CreateOrderProductDto,
        nullable: false,
        isArray: true,
        default: [{
            "productId": "b4d0670c-4538-44f3-ab9f-d2f645e5fa58",
            "price": 10
        },
        {
            "productId": "10f4eb4f-653e-4306-b14e-422ad180a694",
            "price": 20
        }]
    })
    @IsNotEmpty()
    orderProduct: CreateOrderProductDto[]
}