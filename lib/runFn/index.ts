import { AxiosError } from "axios"
import { ResultVO } from "types/common"

const runFn = async (fn: Function, rejectedWithValue: any) => {
    try {
        return (await fn()).data as ResultVO
    } catch(e: any) {
        let error: AxiosError<ResultVO> = e
        console.log(error)
        if (!error.response) {
            throw e
        }

        return rejectedWithValue(error.response.data)
    }
}

export default runFn