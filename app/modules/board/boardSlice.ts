import { createAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ResultVO } from 'types/common'
import { boardAPI } from './boardApi'
import runFn from 'lib/runFn'
import { BOARD_CHANGE_STATE } from './boardAction'

export type Board = {
    id: number
    title: string
    contents: string
    createdAt: string
}

export type BoardForm = {
    title: string
    contents: string
}

export interface BoardState {
    boardList: Board[]
}

const initialState: BoardState = {
  boardList: []
}

export const getBoardList = createAsyncThunk<
    ResultVO,
    number,
    {rejectValue: ResultVO}
>('account/login', async (nextId, { rejectWithValue }) => {
    return await runFn(() => boardAPI.getBoardList(nextId), rejectWithValue)
})

export const createBoard = createAsyncThunk<
    ResultVO,
    BoardForm,
    {rejectValue: ResultVO}
>('account/sign-up', async (boardForm, { rejectWithValue }) => {
    return await runFn(() => boardAPI.createBoard(boardForm), rejectWithValue)
})

export const boardStateChange = createAction<BoardState>(BOARD_CHANGE_STATE)

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        BOARD_CHANGE_STATE: (state, action: PayloadAction<BoardState>) => {
            return action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getBoardList.pending, (state, action) => {
        })
        builder.addCase(getBoardList.fulfilled, (state, action) => {
            return {...state, boardList: action.payload.data.boardList as Board[]}
        })
        builder.addCase(getBoardList.rejected, (state, action) => {
        })

        builder.addCase(createBoard.pending, (state, action) => {
        })
        builder.addCase(createBoard.fulfilled, (state, action) => {
        })
        builder.addCase(createBoard.rejected, (state, action) => {
        })
    },
})

export default boardSlice.reducer
