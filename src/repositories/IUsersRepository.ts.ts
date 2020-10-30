import { User } from "../entities/User";
import { ISearchUserRequestDTO } from "../modules/user/dto/SearchUserDTO";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  findByName(data: ISearchUserRequestDTO): Promise<User[]>;
  save(user: User): Promise<void>;
}