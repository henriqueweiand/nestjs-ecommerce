import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString
} from 'class-validator';
import { CreateOrderProductDto } from './create-order-product.dto';

export class CreateOrderDto {
    @ApiProperty({
        default: '2526fb63-5dc2-42ab-aece-cd2fa40be56a'
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
            "productId": "fe047ad9-da72-4c49-8591-a110751a129c",
            "price": 10
        },
        {
            "productId": "3329e67c-4711-4814-88c6-9d5c53ece72d",
            "price": 20
        }]
    })
    @IsNotEmpty()
    orderProduct: CreateOrderProductDto[]
}