import { ApiResponse, User, UserProfile } from "@/types/data";
import { RootThunkAction } from "@/types/store";
import request from '@/utils/request'

export function getUser(): RootThunkAction {
  return async (dispatch) => {
    const res = await request.get<ApiResponse<User>>('/user')
    const { data } = res.data
    dispatch({
      type: 'profile/getUser',
      payload: data
    })
  }
}

export const getUserProfile = (): RootThunkAction => {
  return async (dispatch) => {
    const res = await request.get<ApiResponse<UserProfile>>('/user/profile')
    dispatch({
      type: 'profile/getUserProfile',
      payload: res.data.data,
    })
  }
}