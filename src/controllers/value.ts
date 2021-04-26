import { RequestHandler } from 'express'

import buildHTTPResponseError from '../utils/buildHTTPResponseError'
import { NotFoundError } from '../utils/errors'
const values = ['v1', 'v2', 'v3']

export const get: RequestHandler = (_, res) => res.send(values)

export const getById: RequestHandler = (req, res) => {
  const requestID: string = res.locals.requestID

  try {
    const { id } = req.params

    if (!values[Number(id)]) {
      throw new NotFoundError({ message: `Not found value with id ${id}`, requestID })
    }
    return res.send(values[Number(id)])
  } catch (error) {
    const { status, body } = buildHTTPResponseError(error, requestID)
    return res.status(status).send(body)
  }
}
