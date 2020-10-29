import { User } from "../entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findByName(name: string, limit: number, skip: number): Promise<User[]>;
  save(user: User): Promise<void>;
}