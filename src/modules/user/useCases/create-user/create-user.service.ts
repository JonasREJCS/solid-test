import { User } from "../../../entities/User";
import { IFila } from "../../../shared/fila/IFila";
import { IMailProvider } from "../../../providers/IMailProvider";
import { IUsersRepository } from "../../../repositories/IUsersRepository.ts";
import { ICreateUserRequestDTO } from "../dto/create-user.dto";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private fila: IFila
  ){}

  async execute(data: ICreateUserRequestDTO){
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists){
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.fila.enviarParaFila()
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