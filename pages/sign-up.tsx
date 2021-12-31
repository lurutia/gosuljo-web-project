import { useRouter } from 'next/router'
import { ReactElement, useCallback } from 'react'
import { NextPageWithLayout } from '../types/layout'
import styled from 'styled-components'
import { useFormik  } from 'formik'
import InputBasic from '../components/inputs/InputBasic'
import ButtonBasic from '../components/buttons/ButtonBasic'
import axios, {AxiosResponse, AxiosError} from 'axios'
import { serverUrl } from '../config/const'
import { ResultVO } from '../types/common'
import NoneMenuLayout from '../layouts/NoneMenuLayout'


const SignUpWrapper = styled.div`
    max-width: 620px;
    height: 700px;
    background-color: #FFFFFF;
    margin: -120px auto 0;
    border-radius: 20px;
    border: 1px solid #707070;
    padding: 70px 110px 0;
`


const SignUp: NextPageWithLayout = () => {
    const router = useRouter();

    const myAxios = axios.create({
        baseURL: serverUrl,
    })

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkPassword: '',
        },
        onSubmit: values => {
            login(values);
        }
    })

    const login = useCallback(async (obj) => {
        await myAxios.post('/account/sign-up', obj, {withCredentials: true}).then((res: AxiosResponse) => {
            router.push('/')
        }).catch((e: AxiosError) => {
            // server responded
            if (e.response) {
                const result = e.response.data as ResultVO
                alert(result.errorMessage)
            }
            // request maded but no response
            else if (e.request) {
                alert('예기치 않은 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
            }
            // something happend in setting up
            else {
                alert('예기치 않은 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
            }
        })
    }, [])

    return (
        <SignUpWrapper>
            <form onSubmit={formik.handleSubmit}>
                <div>이메일</div>
                <div><InputBasic name='email' value={formik.values.email} onChange={formik.handleChange}/></div>
                <div>비밀번호</div>
                <div><InputBasic name='password' value={formik.values.password} onChange={formik.handleChange} type='password'/></div>
                <div><InputBasic name='checkPassword' value={formik.values.checkPassword} onChange={formik.handleChange} type='password'/></div>
                <div><ButtonBasic>회원가입</ButtonBasic></div>
            </form>
        </SignUpWrapper>
    )
}

export default SignUp;

SignUp.getLayout = (page: ReactElement) => {
    return (
        <NoneMenuLayout>{page}</NoneMenuLayout>
    )
}