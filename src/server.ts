import dotenv from 'dotenv'
dotenv.config()

import { app } from './app'
import { info } from './utils'
import { configs } from './configs'

const main = async (): Promise<void> => {
  app.listen(
    configs.port,
    () => info({
      type: 'express',
      message: `Server running`,
      port: configs.port,
      env: configs.env
    })
  )
}

main()
