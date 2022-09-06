import { LoginForm, Token, ApiResponse } from "@/types/data";
import { RootThunkAction } from "@/types/store";
import request from '@/utils/request'
import { setToken } from "@/utils/storage"


export const login = (values: LoginForm): RootThunkAction => {
  return async (dispatch) => {
    const res = await request.post<ApiResponse<Token>>('/authorizations', values)
    dispatch({
      type: 'login/login',
      payload: res.data.data
    })

    setToken(res.data.data)
  }
}

export function getCode(mobile: string) {
  return async () => {
    await request.get(`/sms/codes/${mobile}`)
  }
}