import { MailTrapMailProvider } from "../../../providers/implementations/MailTrapMailProvider";
import { postgresUserRepository } from "../../../repositories/implementations/PostgresDatabase";
import { CreateUserController } from "../infra/http/express/controllers/create-user.controller";
import { CreateUserUseCase } from "./create-user.service";
import { fila } from "../../../dependencyContainer/dependencyContainer";

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository, 
  fila
); 

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }