package com.gosuljo.web.project.modules.board

import com.gosuljo.web.project.infra.vo.ResultVO
import com.gosuljo.web.project.modules.account.UserAccount
import com.gosuljo.web.project.modules.board.form.BoardForm
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional
import java.time.LocalDateTime

@Service
class BoardService(
    private val boardRepository: BoardRepository
) {
    fun getBoard(id: Long): ResultVO {
        val resultVO = ResultVO()

        val board = boardRepository.findById(id)
        if (board != null) {
            val boardForm = BoardForm(
                id = board.id,
                title = board.title,
                contents = board.contents,
                createdAt = board.createdAt
            )
            resultVO.data["board"] = boardForm
        }


        return resultVO
    }

    @Transactional
    fun createBoard(boardForm: BoardForm, userAccount: UserAccount) {
        val board: Board = Board(
            id = 0L,
            title = boardForm.title,
            contents = boardForm.contents,
            creator = userAccount.account.id,
            createdAt = LocalDateTime.now(),
            updator = null,
            updatedAt = null
        )

        boardRepository.save(board)
    }

    fun getBoardList(nextId: Long): ResultVO {
        val resultVO = ResultVO()

        val boardList: MutableList<Board> = if (nextId == 0L) {
            boardRepository.findByNextId()
        } else {
            boardRepository.findByNextId(nextId)
        }

        val boardFormList = boardList.map { board ->
            BoardForm(
                id = board.id,
                title = board.title,
                contents = board.contents,
                createdAt = board.createdAt
            )
        }

        resultVO.data["boardList"] = boardFormList
        return resultVO
    }
}