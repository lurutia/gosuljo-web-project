package com.gosuljo.web.project.infra.vo

data class ResultVO(
    var errorMessage: String = ""
) {
    val data: MutableMap<String, Any> = mutableMapOf()

    fun put(key: String, item: Any) {
        this.data[key] = item
    }
}