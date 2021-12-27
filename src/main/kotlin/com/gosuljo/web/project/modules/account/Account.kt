package com.gosuljo.web.project.modules.account

import java.time.LocalDateTime
import javax.persistence.*

@Entity
class Account(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,

    @Column(unique = true)
    var email: String,

    var password: String,

    @Column(name = "creator")
    var creator: Long,

    @Column(name = "created_at")
    var createdAt: LocalDateTime,

    @Column(name = "updator")
    var updator: Long?,

    @Column(name = "updated_at")
    var updatedAt: LocalDateTime?,

    var lastLogin: LocalDateTime?
) {
    constructor(email: String, password: String):this(
        0L, email, password, 0L, LocalDateTime.now(), null, null, null
    )
}