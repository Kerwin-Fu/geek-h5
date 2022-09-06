export type LoginForm = {
  mobile: string,
  code: string
}

export type Token = {
  token: string,
  refresh_token: string
}

export type ApiResponse<T> = {
  message: string,
  data: T
}