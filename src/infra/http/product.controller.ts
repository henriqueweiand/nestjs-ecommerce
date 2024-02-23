import { CreateProductUseCase } from '@app/application/product/use-case/create-product';
import {
    Body,
    Controller,
    Get,
    Post
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';

@Controller('/product')
export class ProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase
    ) { }

    @Get('')
    getAll() {
        return 'ok';
    }

    @Post('create')
    create(@Body() createProductDto: CreateProductDto) {
        const response = this.createProductUseCase.execute(createProductDto);
        return response;
    }
}
