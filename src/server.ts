import dotenv from 'dotenv'
dotenv.config()

import app from './app'
import * as logger from './utils/logger'
import { env } from './configs'

const main = async (): Promise<void> => {
  const port = process.env.PORT || '5000'

  app.listen(port, () => logger.info({ type: 'express', message: `Server running`, port, env }))
}

main()
