import store from "@/store";
import { ThunkAction } from 'redux-thunk'
import { Token } from "./data";

export type RootState = ReturnType<typeof store.getState>

export type RootAction = LoginAction

export type RootThunkAction = ThunkAction<void, RootState, unknown, RootAction>

export type LoginAction = {
  type: 'login/login'
  payload: Token
}