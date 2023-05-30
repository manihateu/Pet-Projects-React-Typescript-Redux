import { AuthAction, AuthActionEnum, AuthState } from "./types"

const initState: AuthState = {
    isAuth: false
}

export default function authReducer(state = initState, action: AuthAction):AuthState{
    switch(action.type){
        case AuthActionEnum.SET_AUTH:
            return {...state, isAuth: action.payload}
        default:
            return state
    }
}