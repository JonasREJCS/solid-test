import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";
import { searchUserController } from "./useCases/SearchUser";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
})

router.get('/users', (request, response) => {
  return searchUserController.handle(request, response);
})

export { router }