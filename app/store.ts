import { configureStore } from '@reduxjs/toolkit'
import { Store } from "redux";
import logger from 'redux-logger'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension'
import { Context, createWrapper } from "next-redux-wrapper";
import { AccountState } from './modules/account/accountSlice';
import { BoardState } from './modules/board/boardSlice';

interface State {
  account: AccountState
  board: BoardState
}

const makeStore = (context: Context) => configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, logger),
  devTools: process.env.NODE_ENV !== 'production',
  enhancers: [],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = ReturnType<typeof makeStore>["dispatch"]

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const wrapper = createWrapper<Store<State>>(makeStore, {
  debug: process.env.NODE_ENV !== "production"
});

export default wrapper;