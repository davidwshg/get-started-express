import { BaseError, InternalServiceError, IDefaultErrorParam, errorNames } from './errors'
import { getStatusCodeOfError } from './'

export const buildHTTPResponseError = (originalError: Error, requestID: string): {
  status: number,
  body: IDefaultErrorParam & { name: string, errors?: Array<BaseError & { path?: string }> }
} => {
  const status = getStatusCodeOfError(originalError)
  const error: BaseError & { errors?: Array<BaseError & { path?: string }> } =
    status >= 500 || !(errorNames.includes(originalError.name)) ?
      new InternalServiceError({ requestID, message: 'This is a internal server error, contact the developers.' }) :
      originalError as BaseError

  return {
    status,
    body: {
      name: error.name,
      message: error.message,
      requestID: error.requestID,
      ...(error.extraInfo ? { extraInfo: error.extraInfo } : {}),
      ...(error.errors ? {
        errors: error.errors.map(error => ({
          requestID: error.requestID,
          name: error.name,
          message: error.message,
          path: error.path
        }))
      } : {})
    }
  }
}
