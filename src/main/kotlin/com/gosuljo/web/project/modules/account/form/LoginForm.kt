package com.gosuljo.web.project.modules.account.form

import org.hibernate.validator.constraints.Length
import javax.validation.constraints.Email
import javax.validation.constraints.NotBlank

data class LoginForm(
    @NotBlank
    @Email
    val email: String,

    @NotBlank
    @Length(min = 8, max = 24)
    val password: String
) {
}