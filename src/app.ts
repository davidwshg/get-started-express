import cors from 'cors'
import express from 'express'

import value from './routes/value'
import requestID from './middlewares/requestID'

const app = express()

app.use(express.json())
app.use(cors())
app.use(requestID)

app.use('/values', value)

export default app
