import { CreateProductUseCase } from '@app/application/ecommerce/use-case/create-product';
import {
    Body,
    Controller,
    Get,
    Inject,
    Post,
    UseInterceptors
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductUseCase } from '@app/application/ecommerce/use-case/get-product';
import { ApiTags } from '@nestjs/swagger';
import { CACHE_MANAGER, CacheKey } from '@nestjs/cache-manager';
import { HttpCacheInterceptor } from '../persistence/cache/interceptor/http-cache.interceptor';

@Controller('/product')
@ApiTags('Product')
export class ProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase,
        private getProductUseCase: GetProductUseCase,
        @Inject(CACHE_MANAGER) private cacheManager: Cache
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
