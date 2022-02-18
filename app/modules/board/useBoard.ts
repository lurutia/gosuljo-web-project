import { RootState, useAppDispatch } from "app/store";
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { BoardForm, createBoard, getBoardList } from './boardSlice'

const useBoard =  () => {
    const { boardList } = useSelector((state: RootState) => state.board);
    const dispatch = useAppDispatch();

    const requestCreateBoard = useCallback((boardForm: BoardForm) => dispatch(createBoard(boardForm)), [dispatch])
    
    const requestGetBoard = useCallback((nextId: number) => dispatch(getBoardList(nextId)), [dispatch])

    return {
        requestCreateBoard,
        requestGetBoard,

        boardList,
    }
}

export default useBoard