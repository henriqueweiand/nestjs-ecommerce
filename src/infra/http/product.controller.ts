import { CreateProductUseCase } from '@app/application/product/use-case/create-product';
import {
    Body,
    Controller,
    Get,
    Post
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductUseCase } from '@app/application/product/use-case/get-product';

@Controller('/product')
export class ProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase,
        private getProductUseCase: GetProductUseCase
    ) { }

    @Get('')
    getAll() {
        const response = this.getProductUseCase.execute({});
        return response;
    }

    @Post('create')
    create(@Body() createProductDto: CreateProductDto) {
        const response = this.createProductUseCase.execute(createProductDto);
        return response;
    }
}
