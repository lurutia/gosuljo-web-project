package com.gosuljo.web.project.modules.account

import com.gosuljo.web.project.modules.account.form.LoginForm
import com.gosuljo.web.project.modules.account.form.SignUpForm
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/account")
class AccountController(
    private val accountService: AccountService
) {
    @PostMapping("/sign-up")
    fun signUp(@Valid @RequestBody signUpForm: SignUpForm):ResponseEntity<Any> {

        accountService.signUp(signUpForm)

        return ResponseEntity.ok().build()
    }

    @PostMapping("/login")
    fun login(@Valid @RequestBody loginForm: LoginForm): ResponseEntity<Any> {
        accountService.login(loginForm)

        return ResponseEntity.ok().build()
    }

    /** 로그인 됐는지 확인하는 용도 */
    @GetMapping("/authenticated")
    fun authenticated(): ResponseEntity<Any> {
        return ResponseEntity.ok("Authenticated")
    }
}