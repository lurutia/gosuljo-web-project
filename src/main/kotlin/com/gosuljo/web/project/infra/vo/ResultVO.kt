package com.gosuljo.web.project.infra.vo

data class ResultVO(
    var errorMessage: String = ""
) {
    var data: MutableMap<String, Any>? = null

    fun put(key: String, item: Any) {
        if (this.data == null) {
            this.data = mutableMapOf()
        }
        this.data!![key] = item
    }
}