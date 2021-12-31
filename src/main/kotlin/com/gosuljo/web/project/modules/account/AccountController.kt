package com.gosuljo.web.project.modules.account

import com.gosuljo.web.project.infra.vo.ResultVO
import com.gosuljo.web.project.modules.account.form.LoginForm
import com.gosuljo.web.project.modules.account.form.SignUpForm
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@RestController
@RequestMapping("/account")
class AccountController(
    private val accountService: AccountService
) {
    @PostMapping("/sign-up")
    fun signUp(@Valid @RequestBody signUpForm: SignUpForm):ResponseEntity<ResultVO> {

        val account: Account = accountService.signUp(signUpForm)
        accountService.login(account)

        return ResponseEntity.ok(ResultVO())
    }

    @PostMapping("/login")
    fun login(@Valid @RequestBody loginForm: LoginForm): ResponseEntity<ResultVO> {
        accountService.login(loginForm)

        return ResponseEntity.ok(ResultVO())
    }

    /** 로그인 됐는지 확인하는 용도 */
    @GetMapping("/authenticated")
    fun authenticated(): ResponseEntity<ResultVO> {
        val resultVO = ResultVO()
        resultVO.put("message", "Authenticated")
        return ResponseEntity.ok(resultVO)
    }
}