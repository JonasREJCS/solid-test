import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository.ts";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider
  ){}

  async execute(data: ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists){
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    // await this.mailProvider.sendMail({
    //     to: {
    //       name: data.name,
    //       email: data.email
    //     },
    //     from: {
    //       name: 'Equipe EQI Corretora',
    //       email: 'equipe@eqicorretora.com'
    //     },
    //     subject: 'Bem vindo a plataforma!',
    //     body: '<p> Você já pode fazer login na plataforma </p>'
    //   })
  }
}