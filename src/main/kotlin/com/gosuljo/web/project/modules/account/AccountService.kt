package com.gosuljo.web.project.modules.account

import com.gosuljo.web.project.infra.handler.CustomException
import com.gosuljo.web.project.infra.handler.ErrorCode
import com.gosuljo.web.project.modules.account.form.LoginForm
import com.gosuljo.web.project.modules.account.form.SignUpForm
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.BadCredentialsException
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.core.Authentication
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class AccountService(
    private val passwordEncoder: PasswordEncoder,
    private val accountRepository: AccountRepository,
    private val authenticationManager: AuthenticationManager
): UserDetailsService{
    override fun loadUserByUsername(email: String): UserDetails {
        val account: Account? = accountRepository.findByEmail(email)
        if (account == null) {
            throw BadCredentialsException(ErrorCode.NOT_FOUND_USERNAME_OR_WRONG_PASSWORD.code)
        }

        return UserAccount(account);
    }

    @Transactional
    fun signUp(signUpForm: SignUpForm) {
        if (accountRepository.existsAccountByEmail(signUpForm.email)) {
            throw CustomException(ErrorCode.NOT_FOUND_USERNAME_OR_WRONG_PASSWORD)
        }
        val account = Account(signUpForm.email, passwordEncoder.encode(signUpForm.password))
        accountRepository.save(account)
    }

    @Transactional(readOnly = true)
    fun login(loginForm: LoginForm) {
        val token = UsernamePasswordAuthenticationToken(loginForm.email, loginForm.password)
        val authentication: Authentication = authenticationManager.authenticate(token)

        SecurityContextHolder.getContext().authentication = authentication
    }
}