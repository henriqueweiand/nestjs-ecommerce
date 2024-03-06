import { CreateProductUseCase } from '@app/application/ecommerce/use-case/create-product';
import { GetProductUseCase } from '@app/application/ecommerce/use-case/get-product';
import { CacheKey } from '@nestjs/cache-manager';
import {
    Body,
    Controller,
    Get,
    Post,
    UseInterceptors
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { HttpCacheInterceptor } from '../persistence/cache/interceptor/http-cache.interceptor';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('/product')
@ApiTags('Product')
export class ProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase,
        private getProductUseCase: GetProductUseCase,
    ) { }

    @Get('')
    @CacheKey('products')
    @UseInterceptors(HttpCacheInterceptor)
    async getAll() {
        const response = this.getProductUseCase.execute({});
        return response;
    }

    @Post('')
    create(@Body() createProductDto: CreateProductDto) {
        const response = this.createProductUseCase.execute(createProductDto);
        return response;
    }
}
