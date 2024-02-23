import { CreateUserUseCase } from '@app/application/ecommerce/use-case/create-user';
import {
    Body,
    Controller,
    Get,
    Post
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserUseCase } from '@app/application/ecommerce/use-case/get-user';

@Controller('/user')
export class UserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getUserUseCase: GetUserUseCase
    ) { }

    @Get('')
    getAll() {
        const response = this.getUserUseCase.execute({});
        return response;
    }

    @Post('create')
    create(@Body() createUserDto: CreateUserDto) {
        const response = this.createUserUseCase.execute(createUserDto);
        return response;
    }
}
