package com.gosuljo.web.project.infra.config

import com.gosuljo.web.project.infra.vo.AuditorAwareImpl
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.domain.AuditorAware
import org.springframework.security.crypto.factory.PasswordEncoderFactories
import org.springframework.security.crypto.password.PasswordEncoder


@Configuration
class BeanConfig {

    @Bean
    fun PasswordEncoder(): PasswordEncoder {
        return PasswordEncoderFactories.createDelegatingPasswordEncoder()
    }

    @Bean
    fun auditorProvider(): AuditorAware<Long>? {
        return AuditorAwareImpl()
    }
}