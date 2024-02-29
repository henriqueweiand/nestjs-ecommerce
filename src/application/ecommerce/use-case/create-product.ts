import { Product } from '@app/domain/ecommerce/product';
import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../ports/product.repositoy';

interface CreateProductUseCaseCommand {
  title: string,
  price: number
}

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    title,
    price
  }: CreateProductUseCaseCommand): Promise<any> {

    const product = new Product({
      title,
      price
    })

    const response = await this.productRepository.create(product)

    return response;
  }
}
