require('dotenv').config()

import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import routes from './routes'

const app = express()
const port = process.env.port || 5000

app.use(express.json())
app.use(cors())
app.use(morgan('combined', {
  stream: { write: msg => console.log(msg) },
}))

app.use(routes)

app.listen(port, () => console.log(`Server run in port ${port}.`))
