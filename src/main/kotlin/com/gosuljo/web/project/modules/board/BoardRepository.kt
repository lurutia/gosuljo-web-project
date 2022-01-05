package com.gosuljo.web.project.modules.board

import org.springframework.data.jpa.repository.Query
import org.springframework.data.repository.Repository
import org.springframework.data.repository.query.Param

interface BoardRepository: Repository<Board, Long> {
    fun findById(id: Long): Board?
    fun save(board: Board): Board
    @Query(value = "SELECT * FROM board board WHERE board.id < :nextId ORDER BY board.id DESC LIMIT 10", nativeQuery = true)
    fun findByNextId(@Param(value = "nextId") nextId: Long): MutableList<Board>
    @Query(value = "SELECT * FROM board board ORDER BY board.id DESC LIMIT 10", nativeQuery = true)
    fun findByNextId(): MutableList<Board>
}