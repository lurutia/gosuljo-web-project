package com.gosuljo.web.project.modules.account

import com.gosuljo.web.project.infra.handler.CustomException
import com.gosuljo.web.project.infra.handler.ErrorCode
import com.gosuljo.web.project.modules.account.form.SignUpForm
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import javax.transaction.Transactional

@Service
class AccountService(
    private val passwordEncoder: PasswordEncoder,
    private val accountRepository: AccountRepository
): UserDetailsService{
    override fun loadUserByUsername(username: String?): UserDetails {
        TODO("Not yet implemented")
    }

    @Transactional
    fun signUp(signUpForm: SignUpForm) {
        if (accountRepository.existsAccountByEmail(signUpForm.email)) {
            throw CustomException(ErrorCode.NOT_FOUND_USERNAME_OR_WRONG_PASSWORD)
        }
        val account = Account(signUpForm.email, passwordEncoder.encode(signUpForm.password))
        accountRepository.save(account)
    }
}