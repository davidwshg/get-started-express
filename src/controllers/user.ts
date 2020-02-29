import { RequestHandler, Request } from 'express-serve-static-core'

import { User, IUser } from '../models/User'

export const post: RequestHandler = async (req: Request<any, any, IUser>, res) => {
  try {
    const user = await User.create(req.body)
    res.send(user)
  } catch (error) {
    console.error(error);
    res.status(500).send(error)
  }
}
