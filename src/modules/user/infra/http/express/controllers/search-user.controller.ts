import {Request, Response} from 'express'
import { SearchUserUseCase } from '../../../../useCases/SearchUser/SearchUserUseCase';

export class SearchUserController {
  constructor(
    private searchUserUseCase: SearchUserUseCase
  ){}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, limit, skip } = request.body

    try {
      const users = await this.searchUserUseCase.execute({
        name,
        limit,
        skip
      })

      return response.json(users).status(201).send();
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error'
      })
    }
  }
}