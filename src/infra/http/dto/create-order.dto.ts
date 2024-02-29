import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString
} from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
    @ApiProperty({
        default: '65df94976ba99ec1fdeebc8c'
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
            "product": "65df94e5094b7a45db09cdb2",
            "price": 10
        },
        {
            "product": "65df94ea094b7a45db09cdb4",
            "price": 20
        }]
    })
    @IsNotEmpty()
    orderProduct: CreateOrderProductDto[]
}