import { NotFoundError } from './errors'

const getStatusCodeOfError = (error: Error): number => {
  if (error instanceof NotFoundError) {
    return 404
  }

  return 500
}

export default getStatusCodeOfError
