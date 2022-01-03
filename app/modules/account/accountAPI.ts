import { defaultAxios } from 'lib/axios'

const login = (obj: {email: string, password: string}) => defaultAxios.post('/account/login', obj)

export const accountAPI = {
    login
}