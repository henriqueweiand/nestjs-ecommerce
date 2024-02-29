import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString
} from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
    @ApiProperty({
        default: 'f4c4343e-3c0f-402b-a732-90c0f120969e'
    })
    @IsString()
    @IsNotEmpty()
    user: string;

    @ApiProperty({
        required: true,
        type: CreateOrderProductDto,
        nullable: false,
        isArray: true,
        default: [{
            "product": "921c991d-9ef0-4e13-9c1e-9bcadea150f8",
            "price": 10
        },
        {
            "product": "ca78bf8f-08f7-42f9-b4f5-0eb23f68ffef",
            "price": 20
        }]
    })
    @IsNotEmpty()
    orderProduct: CreateOrderProductDto[]
}