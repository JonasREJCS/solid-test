import { MailTrapMailProvider } from "../../providers/implementations/MailTrapMailProvider";
import { postgresUserRepository } from "../../repositories/implementations/postgressDatabase";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapProviderMailProvider = new MailTrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
  postgresUserRepository, 
  mailTrapProviderMailProvider
); 

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController }