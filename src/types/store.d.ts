import store from '@/store'
import { ThunkAction } from 'redux-thunk'
import { Token } from './data'

// 各个默认的 action
export type LoginAction = {
  type: 'login/login'
  payload: Token
}
// #mark
export type ProfileAction =
  | {
    type: 'profile/getUser'
    payload: User
  }
  | {
    type: 'profile/getUserProfile'
    payload: UserProfile
  }

// store 的 state 的类型
export type RootState = ReturnType<typeof store.getState>
// 所有的 action 的类型
export type RootAction = LoginAction | ProfileAction
// thunkAction 类型
export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>