import express from 'express'
import { router } from '../../../modules/user/infra/http/express/controllers/routes'

const app = express()

app.use(express.json())
app.use(router)

export { app }