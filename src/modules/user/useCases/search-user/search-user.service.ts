import { User } from "../../../entities/User";
import { IUsersRepository } from "../../../repositories/IUsersRepository.ts";
import { ISearchUserRequestDTO } from "../dto/SearchUserDTO";

export class SearchUserUseCase {
  constructor(
    private usersRepository: IUsersRepository
  ) { }

  async execute(data: ISearchUserRequestDTO): Promise<User[]> {
    const users = await this.usersRepository.findByName(data);

    return users
  }
}