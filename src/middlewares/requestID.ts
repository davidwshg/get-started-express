import { RequestHandler } from 'express'

const requestID: RequestHandler = async (req, res, next) => {
  res.locals.requestID = req.headers['x-request-id'] || Math.random().toString(36).substr(2, 9)

  return next()
}

export default requestID
