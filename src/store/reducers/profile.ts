import { User, UserProfile } from '@/types/data'
import { ProfileAction } from '@/types/store'
type ProfileState = { user: User, userProfile: UserProfile }
const initState = { user: {} } as ProfileState // 建议再加一个 `user: {}`，防止后面报错

// const initState: ProfileState = { user: {} as User } // 也 ok

const profile = (state = initState, action: ProfileAction): ProfileState => {
  switch (action.type) {
    case 'profile/getUser':
      return {
        ...state,
        user: action.payload,
      }
    case 'profile/getUserProfile':
      return {
        ...state,
        userProfile: action.payload
      }
    default:
      return state
  }
}
export default profile