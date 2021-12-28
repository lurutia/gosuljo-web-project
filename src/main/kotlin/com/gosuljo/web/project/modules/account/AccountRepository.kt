package com.gosuljo.web.project.modules.account

import org.springframework.data.repository.Repository

interface AccountRepository: Repository<Account, Long> {
    fun save(account: Account): Account
    fun existsAccountByEmail(email: String): Boolean
    fun findByEmail(email: String): Account?
}