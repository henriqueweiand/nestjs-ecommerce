import { User } from '@app/domain/ecommerce/user';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../ports/user.repositoy';

interface CreateUserUseCaseCommand {
  name: string,
}

@Injectable()
export class CreateUserUseCase {
  constructor(private userRepository: UserRepository) { }

  async execute({
    name
  }: CreateUserUseCaseCommand): Promise<any> {

    const user = new User({
      name
    })

    const response = await this.userRepository.create(user)

    return response;
  }
}
