package com.gosuljo.web.project.modules.account

import org.springframework.security.core.userdetails.User

class UserAccount(
    val account: Account
): User(account.email, account.password, listOf())