package com.gosuljo.web.project.infra.vo

import com.gosuljo.web.project.modules.account.UserAccount
import org.springframework.data.domain.AuditorAware
import org.springframework.security.core.context.SecurityContextHolder
import java.util.*

class AuditorAwareImpl: AuditorAware<Long> {
    override fun getCurrentAuditor(): Optional<Long> {
        val principal = SecurityContextHolder.getContext().authentication.principal
        if (principal == "anonymousUser") {
            return Optional.empty()
        }
        val user = principal as UserAccount
        return Optional.of(user.account.id)
    }
}