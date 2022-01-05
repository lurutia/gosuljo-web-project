package com.gosuljo.web.project.modules.board.form

import java.time.LocalDateTime
import javax.validation.constraints.NotBlank
import javax.validation.constraints.Size

data class BoardForm(
    val id: Long?,
    @field:Size(min = 1, max = 255)
    @field:NotBlank
    val title: String,
    val contents: String,

    val createdAt: LocalDateTime? = null
)