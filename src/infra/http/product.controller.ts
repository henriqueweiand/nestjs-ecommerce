import { CreateProductUseCase } from '@app/application/product/use-case/create-product';
import {
    Controller,
    Get
} from '@nestjs/common';

@Controller('/product')
export class ProductController {
    constructor(
        private createProductUseCase: CreateProductUseCase
    ) { }

    @Get('')
    getAll() {
        return 'ok';
    }

    @Get('create')
    create() {
        const response = this.createProductUseCase.execute({ title: 'teste' });
        return response;
    }
}
