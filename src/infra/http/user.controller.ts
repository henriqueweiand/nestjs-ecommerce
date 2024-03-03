import { CreateUserUseCase } from '@app/application/ecommerce/use-case/create-user';
import {
    Body,
    Controller,
    Get,
    Post,
    UseInterceptors
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserUseCase } from '@app/application/ecommerce/use-case/get-user';
import { ApiTags } from '@nestjs/swagger';
import { CacheKey } from '@nestjs/cache-manager';
import { HttpCacheInterceptor } from '@app/infra/persistence/cache/interceptor/http-cache.interceptor';

@Controller('/user')
@ApiTags('User')
export class UserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
        private getUserUseCase: GetUserUseCase
    ) { }

    @Get('')
    @CacheKey('users')
    @UseInterceptors(HttpCacheInterceptor)
    getAll() {
        const response = this.getUserUseCase.execute({});
        return response;
    }

    @Post('')
    create(@Body() createUserDto: CreateUserDto) {
        const response = this.createUserUseCase.execute(createUserDto);
        return response;
    }
}
