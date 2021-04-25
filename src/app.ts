import cors from 'cors'
import express from 'express'

import value from './routes/value'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/values', value)

export default app
