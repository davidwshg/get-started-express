export interface IDefaultErrorParam {
  message: string
  requestID: string
  extraInfo?: { [name: string]: string | number | boolean }
}

export abstract class BaseError extends Error implements IDefaultErrorParam {
  public requestID: string
  public extraInfo?: { [name: string]: string | number | boolean }

  constructor(
    {
      name,
      message,
      requestID,
      extraInfo
    }: IDefaultErrorParam & { name: string }
  ) {
    super(message)
    this.name = name
    this.requestID = requestID
    this.extraInfo = extraInfo
  }
}

export class NotFoundError extends BaseError {
  constructor(defaultErrorParam: IDefaultErrorParam) {
    super({ ...defaultErrorParam, name: 'NotFoundError' })
  }
}

export class InternalServiceError extends BaseError {
  constructor(defaultErrorParam: IDefaultErrorParam) {
    super({ ...defaultErrorParam, name: 'InternalServiceError' })
  }
}

export class ActionDeniedError extends BaseError {
  constructor(defaultErrorParam: IDefaultErrorParam) {
    super({ ...defaultErrorParam, name: 'ActionDeniedError' })
  }
}

export class UnauthorizedError extends BaseError {
  constructor(defaultErrorParam: IDefaultErrorParam) {
    super({ ...defaultErrorParam, name: 'UnauthorizedError' })
  }
}

export class ValidationError extends BaseError {
  public path?: string
  public errors?: Array<BaseError>
  constructor(defaultErrorParam: IDefaultErrorParam & { path?: string, errors?: Array<BaseError> }) {
    super({ ...defaultErrorParam, name: 'ValidationError' })

    if (defaultErrorParam.errors) {
      this.errors = defaultErrorParam.errors
    }

    if (defaultErrorParam.path) {
      this.path = defaultErrorParam.path
    }
  }
}

export const errorNames = [NotFoundError.name, InternalServiceError.name, ValidationError.name, ActionDeniedError.name, UnauthorizedError.name]
