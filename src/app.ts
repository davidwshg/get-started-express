import cors from 'cors'
import express from 'express'

import { valueRouter } from './routes'
import { requestID } from './middlewares'

export const app = express()

app.use(express.json())
app.use(cors())
app.use(requestID)

app.use('/values', valueRouter)
