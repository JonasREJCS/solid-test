import { postgresUserRepository } from "../../repositories/implementations/postgressDatabase";
import { SearchUserController } from "./SearchUserController";
import { SearchUserUseCase } from "./SearchUserUseCase";

const searchUserUseCase = new SearchUserUseCase(
  postgresUserRepository
); 

const searchUserController = new SearchUserController(searchUserUseCase);

export { searchUserUseCase, searchUserController }