import { User } from "../../entities/User";
import { ISearchUserRequestDTO } from "../../modules/user/dto/SearchUserDTO";
import { IUsersRepository } from "../IUsersRepository.ts";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];
  
  async findByName(data: ISearchUserRequestDTO): Promise<User[]> {
    const { name, limit, skip } = data

    const filteredUsers = this.users.filter((user) => user.name.includes(name))
    
    return filteredUsers
  }

  async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async save(user: User): Promise<void>{
    this.users.push(user)
  }
}