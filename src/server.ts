import dotenv from 'dotenv'
import app from './app'
import * as logger from './utils/logger'

dotenv.config()

const port = process.env.PORT || '5000'

app.listen(port, () => logger.info({ type: 'express', message: `Server running`, port }))
