import store from "@/store";
import { ThunkAction } from 'redux-thunk'

export type RootState = ReturnType<typeof store.getState>

export type RootAction = LoginAction

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export type LoginAction = {
  type: 'login/login'
}