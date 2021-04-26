import { NotFoundError, ValidationError } from './errors'

const getStatusCodeOfError = (error: Error): number => {
  if (error.name === NotFoundError.name) {
    return 404
  }
  if (error.name === ValidationError.name) {
    return 400
  }

  return 500
}

export default getStatusCodeOfError
