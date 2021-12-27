package com.gosuljo.web.project.infra.handler

import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestController
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse

@RestController
@ControllerAdvice
class ExceptionHandler {
    val logger = LoggerFactory.getLogger(ExceptionHandler::class.java)

    /** CUSTOM ERROR */
    @org.springframework.web.bind.annotation.ExceptionHandler(CustomException::class)
    fun sunnyExceptionHandler(request: HttpServletRequest, response: HttpServletResponse, exception: CustomException): ResponseEntity<String> {
        val message: String = exception.msg.ifEmpty { exception.code.code }

        logger.info("error", exception)
        logger.error(exception.stackTraceToString())

        return ResponseEntity<String>(message, exception.httpStatus)
    }

    /** SERVER ERROR */
    // 이 함수는 맨 아래 존재해야 한다. 오버로딩 기능을 우리가 원하는대로 사용하기 위해서이다.
    // 시스템 에러이지만 어떤 형태인지 알 수 없는 종류의 에러를 핸들링 한다. 에러의 최상위 객체인 Exception 을 인자로 받는다.
    @org.springframework.web.bind.annotation.ExceptionHandler(Exception::class)
    fun defaultExceptionHandler(request: HttpServletRequest, response: HttpServletResponse, exception: Exception): ResponseEntity<String> {
        logger.info("error", exception)
        logger.error(exception.stackTraceToString())

        return ResponseEntity.internalServerError().body(exception.message)
    }
}

class CustomException(
    val code: ErrorCode = ErrorCode.UNKNOWN,
    var msg: String = "",
    var httpStatus: HttpStatus = HttpStatus.BAD_REQUEST
): RuntimeException() {

}

enum class ErrorCode(val code: String) {
    NOT_FOUND_USERNAME_OR_WRONG_PASSWORD("아이디가 없거나 패스워드가 다릅니다."),
    UNKNOWN("알 수 없는 에러가 발생했습니다. 관리자에게 문의해주세요."),
    //... 새로운 에러를 추가한다.
}