import cors from 'cors'
import express from 'express'
import morgan from 'morgan'

import routes from './routes'
import log from './services/winston'

const app = express()
const port = process.env.port || 5000

app.use(express.json())
app.use(cors())
app.use(morgan('combined', {
  stream: { write: msg => log.info(msg) },
}))

app.use(routes)

app.listen(port, () => log.info(`Server run in port ${port}.`))
