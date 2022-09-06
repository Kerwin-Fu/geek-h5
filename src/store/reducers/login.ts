import { Token } from "@/types/data"
import { LoginAction } from "@/types/store"
import { getToken } from "@/utils/storage"


const initState: Token = getToken()

const login = (state = initState, action: LoginAction) => {
  if (action.type === 'login/login') {
    return action.payload
  }

  return state
}

export default login