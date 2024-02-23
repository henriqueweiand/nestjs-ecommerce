import { Injectable } from '@nestjs/common';
import { UserRepository } from '../ports/user.repositoy';

interface GetUserUseCaseCommand { }

@Injectable()
export class GetUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({ }: GetUserUseCaseCommand): Promise<any> {
    const response = await this.userRepository.findMany()

    return response;
  }
}
