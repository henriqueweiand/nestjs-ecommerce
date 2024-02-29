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
    product: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number;
}