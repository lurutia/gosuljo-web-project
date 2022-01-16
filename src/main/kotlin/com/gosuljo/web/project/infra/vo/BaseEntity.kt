package com.gosuljo.web.project.infra.vo

import org.springframework.data.annotation.CreatedBy
import org.springframework.data.annotation.CreatedDate
import org.springframework.data.annotation.LastModifiedBy
import org.springframework.data.annotation.LastModifiedDate
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.io.Serializable
import java.time.LocalDateTime
import javax.persistence.*

@MappedSuperclass
@EntityListeners(value = [AuditingEntityListener::class])
open class BaseTimeEntity(
    @CreatedDate
    @Column(updatable = false, nullable = false)
    var createdAt: LocalDateTime? = null,

    @LastModifiedDate
    var updatedAt: LocalDateTime? = null
)

@MappedSuperclass
@EntityListeners(value = [AuditingEntityListener::class])
open class BaseEntity(
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long = 0L,

    @CreatedBy
    @Column(updatable = false, nullable = false)
    var creator: Long? = null,

    @LastModifiedBy
    var updater: Long? = null
): BaseTimeEntity(), Serializable