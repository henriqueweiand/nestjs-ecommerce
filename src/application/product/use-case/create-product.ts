import { Product } from '@app/domain/product/product';
import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../ports/product.repositoy';

interface CreateProductUseCaseCommand {
  title: string
}

@Injectable()
export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({
    title,
  }: CreateProductUseCaseCommand): Promise<any> {

    const product = new Product({
      title,
    })

    const response = await this.productRepository.create(product)

    return response;
  }
}
