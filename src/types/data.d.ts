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

export type User = {
  id: string
  name: string
  photo: string
  art_count: number
  follow_count: number
  fans_count: number
  like_count: number
}

export type UserProfile = {
  id: string
  photo: string
  name: string
  mobile: string
  gender: number
  birthday: string
  intro: string
}