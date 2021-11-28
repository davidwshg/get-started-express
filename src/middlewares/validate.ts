import * as yup from 'yup'
import { ObjectShape } from 'yup/lib/object'
import { RequestHandler } from 'express'

import { buildHTTPResponseError } from '../utils'
import { ValidationError } from '../utils/errors'

export const validate = <TNextShape extends ObjectShape>(schema: TNextShape): RequestHandler => {
  return async (req, res, next) => {
    try {
      await yup.object().shape(schema).validate(req, { abortEarly: false })

      return next()
    } catch (error) {
      const requestID: string = res.locals.requestID
      const validateErrors = (<Error & { inner: Array<Error & { path: string }> }>error).inner
        .map(({ message, path }) => new ValidationError({ requestID, message: message, path: path }))
      const validateError = new ValidationError({ requestID, message: error.message, errors: validateErrors })
      const { status, body } = buildHTTPResponseError(validateError, requestID)
      return res.status(status).send(body)
    }
  }
}
