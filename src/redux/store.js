import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk';
import AuthReducer from "./reducers/Auth/AuthReducer";

const reducers = combineReducers({
    AuthReducer: AuthReducer
})
const store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store