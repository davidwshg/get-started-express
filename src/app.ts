import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'

import value from './routes/value'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.use('/values', value)

app.listen(port, () => console.log(`Server run in port ${port}.`))
