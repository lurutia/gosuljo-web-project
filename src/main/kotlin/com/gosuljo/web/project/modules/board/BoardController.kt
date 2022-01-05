package com.gosuljo.web.project.modules.board

import com.gosuljo.web.project.infra.vo.ResultVO
import com.gosuljo.web.project.modules.account.UserAccount
import com.gosuljo.web.project.modules.board.form.BoardForm
import org.springframework.http.ResponseEntity
import org.springframework.security.core.Authentication
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/board")
class BoardController(
    private val boardService: BoardService
) {
    @GetMapping("/{id}")
    fun getBoard(@PathVariable("id") id: Long): ResponseEntity<ResultVO> {

        return ResponseEntity.ok(boardService.getBoard(id))
    }

    @PostMapping
    fun createBoard(@RequestBody @Valid boardForm: BoardForm, authentication: Authentication):ResponseEntity<ResultVO> {
        val userAccount = (authentication.principal) as UserAccount
        boardService.createBoard(boardForm, userAccount)
        return ResponseEntity.ok(ResultVO())
    }

    @GetMapping("/list")
    fun getBoardList(@RequestParam(value = "nextId", defaultValue = "0") nextId: Long): ResponseEntity<ResultVO> {
        return ResponseEntity.ok(boardService.getBoardList(nextId))
    }
}