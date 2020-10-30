import { Router } from "express";
import { createUserController } from "../../../../useCases/search-user";
import { searchUserController } from "../../../../useCases/search-user";

const router = Router()

router.post('/users', (request, response) => {
  return createUserController.handle(request, response);
})

router.get('/users', (request, response) => {
  return searchUserController.handle(request, response);
})

export { router }