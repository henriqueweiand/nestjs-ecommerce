import { CreateOrderUseCase } from '@app/application/ecommerce/use-case/create-order';
import {
    Body,
    Controller,
    Get,
    Post
} from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { GetOrderUseCase } from '@app/application/ecommerce/use-case/get-order';

@Controller('/order')
export class OrderController {
    constructor(
        private createOrderUseCase: CreateOrderUseCase,
        private getOrderUseCase: GetOrderUseCase
    ) { }

    @Get('')
    getAll() {
        const response = this.getOrderUseCase.execute({});
        return response;
    }

    @Post('create')
    create(@Body() createOrderDto: CreateOrderDto) {
        const response = this.createOrderUseCase.execute(createOrderDto);
        return response;
    }
}
