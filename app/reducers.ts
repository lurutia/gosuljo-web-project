import { AnyAction, CombinedState, combineReducers } from 'redux'
import { HYDRATE } from "next-redux-wrapper";
import accountReducer, { AccountState } from './modules/account/accountSlice'

interface State {
    account: AccountState;
}

const rootReducer = (state: State | undefined, action: AnyAction): CombinedState<State> => {
    switch (action.type) {
        case HYDRATE:
            return { ...state, ...action.payload }
        default: {
            const combineReducer = combineReducers({
                account: accountReducer,
            })

            return combineReducer(state, action)
        }
    }
}

export default rootReducer
