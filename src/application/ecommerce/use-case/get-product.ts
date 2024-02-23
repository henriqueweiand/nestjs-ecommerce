import { Injectable } from '@nestjs/common';
import { ProductRepository } from '../ports/product.repositoy';

interface GetProductUseCaseCommand { }

@Injectable()
export class GetProductUseCase {
  constructor(private productRepository: ProductRepository) { }

  async execute({ }: GetProductUseCaseCommand): Promise<any> {
    const response = await this.productRepository.findMany()

    return response;
  }
}
