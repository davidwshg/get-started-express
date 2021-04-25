import { BaseError, InternalServiceError, IDefaultErrorParam } from './errors'
import getStatusCodeOfError from './getStatusCodeOfError'

const buildHTTPResponseError = (originalError: Error, requestID: string): {
  status: number,
  body: IDefaultErrorParam & { name: string }
} => {
  const status = getStatusCodeOfError(originalError)
  const error: BaseError =
    status >= 500 || !(originalError instanceof BaseError) ?
      new InternalServiceError({ requestID, message: 'This is a internal server error, contact the developers.' }) :
      originalError

  return {
    status,
    body: {
      name: error.name,
      message: error.message,
      requestID: error.requestID,
      ...(error.extraInfo ? { extraInfo: error.extraInfo } : {})
    }
  }
}

export default buildHTTPResponseError
