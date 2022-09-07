import store from "@/store";
import { ThunkAction } from 'redux-thunk'
import { Token, User } from "./data";

export type RootState = ReturnType<typeof store.getState>

export type RootAction = LoginAction | ProfileAction

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export type LoginAction = {
  type: 'login/login'
  payload: Token
}

export type ProfileAction = {
  type: 'profile/getUser'
  payload: User
} | {
  type: 'profile/getUserProfile'
  payload: UserProfile
}