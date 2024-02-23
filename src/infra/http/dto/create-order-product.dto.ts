import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator';

export class CreateOrderProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    productId: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number;
}