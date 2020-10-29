import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository.ts";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];
  
  async findByName(name: string, limit: number, skip: number): Promise<User[]> {
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