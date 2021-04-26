export interface IDefaultLogParam {
  requestID: string,
  message: string,
  [name: string]: string | number | boolean
}

export interface ISystemLogParam {
  type: string,
  message: string,
  [name: string]: string
}

export const error = (data: Error): void => console.error(data)

export const info = (data: IDefaultLogParam | ISystemLogParam): void => console.log(data)

export const warn = (data: IDefaultLogParam | ISystemLogParam): void => console.warn(data)
