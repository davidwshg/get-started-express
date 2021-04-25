import { RequestHandler } from 'express'
const values = ['v1', 'v2', 'v3']

export const get: RequestHandler = (_, res) => res.send(values)

export const getById: RequestHandler = (req, res) => {
  const { id } = req.params

  if (!values[Number(id)]) {
    return res.status(404).send()
  }

  return res.send(values[Number(id)])
}
