import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsNumber,
    IsString
} from 'class-validator';

export class CreateProductDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    quantityAvailable: number;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    price: number;
}