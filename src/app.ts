import cors from 'cors'
import express from 'express'

import { value } from './routes'
import { requestID } from './middlewares'

const app = express()

app.use(express.json())
app.use(cors())
app.use(requestID)

app.use('/values', value)

export default app
