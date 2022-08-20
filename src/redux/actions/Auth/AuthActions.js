import AuthServices from "../../services/Auth/AuthServices"
import { LOGIN_SUCCESS, LOGOUT } from "../../types/AuthType"

export const login = (user) => async (dispatch) => {
    return AuthServices.logIn(user).then(
        (response) => {
            if (response.status == 'success') {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { user: response.user }
                })
                Promise.resolve()
                return response
            }
        },
        (error) => {
            const message = error.toString()
            Promise.reject()
            return message
        }
    )
}

export const logout = () => (dispatch) => {
    return AuthServices.logOut().then(
        (response) => {
            if (response.status == 'success') {
                dispatch({
                    type: LOGOUT
                })
                Promise.resolve()
                return response
            }
        }
    )
}