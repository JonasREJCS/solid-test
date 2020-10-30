import { postgresUserRepository } from "../../../../repositories/implementations/PostgresDatabase";
import { SearchUserController } from "../../shared/http/express/controllers/search-user.controller";
import { SearchUserUseCase } from "./search-user.service";

const searchUserUseCase = new SearchUserUseCase(
  postgresUserRepository
); 

const searchUserController = new SearchUserController(searchUserUseCase);

export { searchUserUseCase, searchUserController }