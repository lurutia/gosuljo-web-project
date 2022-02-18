import { defaultAxios } from 'lib/axios'
import { BoardForm } from './boardSlice'

const createBoard = (boardForm: BoardForm) => defaultAxios.post('/board', boardForm)

const getBoardList = (nextId: number) => defaultAxios.get('/board/list', {})

export const boardAPI = {
    createBoard,
    getBoardList,
}