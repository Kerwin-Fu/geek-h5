// #1
import { User, UserProfile } from '@/types/data'
import { ProfileAction } from '@/types/store'
// #2
type ProfileState = { user: User; userProfile: UserProfile }
// #3
const initState = { user: {}, userProfile: {} } as ProfileState

const profile = (state = initState, action: ProfileAction): ProfileState => {
    switch (action.type) {
        case 'profile/getUser':
            return {
                ...state,
                user: action.payload,
            }
        // #4
        case 'profile/getUserProfile':
            return {
                ...state,
                userProfile: action.payload,
            }
        default:
            return state
    }
}
export default profile