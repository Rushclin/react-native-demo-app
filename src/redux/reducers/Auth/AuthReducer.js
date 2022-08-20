import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN_SUCCESS, LOGOUT } from "../../types/AuthType";

const user = AsyncStorage.getItem('user');

const initialState = user
    ? { isLogin: true, user }
    : { isLogin: false, user: null }

export default autReducer = (state = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLogin: true,
                user: payload.user
            }
        case LOGOUT:
            return {
                ...state,
                isLogin: false,
                user: null
            }
        default:
            return state
    }
}