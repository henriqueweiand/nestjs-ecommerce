import { CreateProductUseCase } from '@app/application/ecommerce/use-case/create-product';
import {
    Body,
    Controller,
    Get,
    Post
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductUseCase } from '@app/application/ecommerce/use-case/get-product';
import { ApiTags } from '@nestjs/swagger';

@Controller('/product')
@ApiTags('Product')
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

    @Post('')
    create(@Body() createProductDto: CreateProductDto) {
        const response = this.createProductUseCase.execute(createProductDto);
        return response;
    }
}
