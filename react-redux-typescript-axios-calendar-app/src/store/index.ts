import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from './reducers/index'
const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch 