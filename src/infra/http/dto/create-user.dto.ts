import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsString
} from 'class-validator';

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;
}