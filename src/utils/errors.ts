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
