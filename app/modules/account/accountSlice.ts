import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResultVO } from 'types/common'
import { accountAPI } from './accountAPI'
import { AxiosError } from 'axios'

export type LoginForm = {
    email: string
    password: string
}

export type SignUpForm = {
    email: string
    password: string
}

interface AccountState {
    isLogin: boolean
}

const initialState: AccountState = {
  isLogin: false
}

export const loginAction = createAsyncThunk<
    ResultVO,
    LoginForm,
    {rejectValue: ResultVO}
>('account/login', async (obj, { rejectWithValue }) => {
    return await runFn(() => accountAPI.login(obj), rejectWithValue)
})

export const signUpAction = createAsyncThunk<
    ResultVO,
    SignUpForm,
    {rejectValue: ResultVO}
>('account/sign-up', async (obj, { rejectWithValue }) => {
    return await runFn(() => accountAPI.signUp(obj), rejectWithValue)
})

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(loginAction.pending, (state, action) => {
        })
        builder.addCase(loginAction.fulfilled, (state, action) => {
            state.isLogin = true
        })
        builder.addCase(loginAction.rejected, (state, action) => {
        })

        builder.addCase(signUpAction.pending, (state, action) => {
        })
        builder.addCase(signUpAction.fulfilled, (state, action) => {
        })
        builder.addCase(signUpAction.rejected, (state, action) => {
        })
    },
})

export const {  } = accountSlice.actions

export default accountSlice.reducer

const runFn = async (fn: Function, rejectedWithValue: any) => {
    try {
        return await fn().data as ResultVO
    } catch(e: any) {
        let error: AxiosError<ResultVO> = e
        console.log(error)
        if (!error.response) {
            throw e
        }

        return rejectedWithValue(error.response.data)
    }
}