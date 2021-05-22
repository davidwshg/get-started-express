import { NotFoundError, ValidationError, UnauthorizedError, ActionDeniedError } from './errors'

const getStatusCodeOfError = (error: Error): number => {
  const statusCodes = {
    [NotFoundError.name]: 404,
    [ActionDeniedError.name]: 400,
    [ValidationError.name]: 400,
    [UnauthorizedError.name]: 401,
  }

  return statusCodes[error.name] || 500
}

export default getStatusCodeOfError
