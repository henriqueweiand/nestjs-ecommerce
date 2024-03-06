import { CreateOrderUseCase } from '@app/application/ecommerce/use-case/create-order';
import { GetOrderUseCase } from '@app/application/ecommerce/use-case/get-order';
import { GetOrdersUseCase } from '@app/application/ecommerce/use-case/get-orders';
import { HttpCacheInterceptor } from '@app/infra/persistence/cache/interceptor/http-cache.interceptor';
import { CacheKey } from '@nestjs/cache-manager';
import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    UseInterceptors
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('/order')
@ApiTags('Order')
export class OrderController {
    constructor(
        private createOrderUseCase: CreateOrderUseCase,
        private getOrderUseCase: GetOrderUseCase,
        private getOrdersUseCase: GetOrdersUseCase,
    ) { }

    @Get(':id')
    @CacheKey('order')
    @UseInterceptors(HttpCacheInterceptor)
    getOne(@Param('id') id: string) {
        const response = this.getOrderUseCase.execute(id);
        return response;
    }

    @Get('')
    @CacheKey('orders')
    @UseInterceptors(HttpCacheInterceptor)
    getAll() {
        const response = this.getOrdersUseCase.execute({});
        return response;
    }

    @Post('')
    create(@Body() createOrderDto: CreateOrderDto) {
        const response = this.createOrderUseCase.execute(createOrderDto);
        return response;
    }
}
