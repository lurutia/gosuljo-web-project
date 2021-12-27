package com.gosuljo.web.project.modules.account

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
}