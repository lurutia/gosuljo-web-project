import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResultVO } from 'types/common'
import { accountAPI } from './accountAPI'
import { AxiosError } from 'axios'

export type LoginForm = {
    email: string
    password: string
}

// Define a type for the slice state
interface AccountState {
    isLogin: boolean
}

// Define the initial state using that type
const initialState: AccountState = {
  isLogin: false
}

// First, create the thunk
export const login = createAsyncThunk<
    ResultVO,
    LoginForm,
    {rejectValue: ResultVO}
>('account/login', async (obj, { rejectWithValue }) => {
    return await runFn(() => accountAPI.login(obj), rejectWithValue)
})

export const accountSlice = createSlice({
    name: 'account',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(login.pending, (state, action) => {
        })
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLogin = true
        })
        builder.addCase(login.rejected, (state, action) => {
        })
    },
})

export const {  } = accountSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.account.isLogin

export default accountSlice.reducer

const runFn = async (fn: Function, rejectedWithValue: any) => {
    try {
        return await fn().data as ResultVO
    } catch(e: any) {
        let error: AxiosError<ResultVO> = e
        if (!error.response) {
            throw e
        }

        return rejectedWithValue(error.response.data)
    }
}