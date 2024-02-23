import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
    @ApiProperty({
        default: 'd39a0321-f308-4795-a37c-3ebd0f1bd2c4'
    })
    @IsString()
    @IsNotEmpty()
    userId: string;

    @ApiProperty({
        required: true,
        type: CreateOrderProductDto,
        nullable: false,
        isArray: true,
        default: [{
            "productId": "3811d764-8deb-40af-979e-8c3fc2d656e5",
            "price": 20
        },
        {
            "productId": "94ba5a1e-9d08-4d8e-b5e3-1d3b7787121f",
            "price": 10
        }]
    })
    @IsNotEmpty()
    orderProduct: CreateOrderProductDto[]
}