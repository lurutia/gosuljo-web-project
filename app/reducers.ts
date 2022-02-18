import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from "next-redux-wrapper";
import accountReducer, { AccountState } from './modules/account/accountSlice'
import boardReducer, { BoardState } from './modules/board/boardSlice';

interface State {
    account: AccountState
    board: BoardState
}

const rootReducer = (state: State | undefined, action: AnyAction): CombinedState<State> => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        default: {
            const combineReducer = combineReducers({
                account: accountReducer,
                board: boardReducer
            })

            return combineReducer(state, action)
        }
    }
}

export default rootReducer
