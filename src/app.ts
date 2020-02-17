import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import value from './routes/value'
import log from './services/winston'

const app = express()
const port = process.env.port || 5000

app.use(express.json())
app.use(cors())
app.use(morgan('combined', {
  stream: { write: msg => log.info(msg) },
}))

app.use('/value', value)

app.listen(port, () => log.info(`Server run in port ${port}.`))
