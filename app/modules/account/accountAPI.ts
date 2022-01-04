import { defaultAxios } from 'lib/axios'
import { LoginForm, SignUpForm } from './accountSlice'

const login = (obj: LoginForm) => defaultAxios.post('/account/login', obj)

const signUp = (obj: SignUpForm) => defaultAxios.post('/account/sign-up', obj)

export const accountAPI = {
    login,
    signUp,
}