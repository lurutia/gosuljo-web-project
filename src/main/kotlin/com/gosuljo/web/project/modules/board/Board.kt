package com.gosuljo.web.project.modules.board

import java.time.LocalDateTime
import javax.persistence.*

@Entity
class Board(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    var title: String,

    var contents: String,

    @Column(name = "creator")
    var creator: Long,

    @Column(name = "created_at")
    var createdAt: LocalDateTime,

    @Column(name = "updator")
    var updator: Long?,

    @Column(name = "updated_at")
    var updatedAt: LocalDateTime?
)