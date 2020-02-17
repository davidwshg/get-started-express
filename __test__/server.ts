import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import value from '../src/routes/value'

const app = express()

app.use(express.json())
app.use(cors())

app.use('/value', value)

export default app
