import { useRouter } from 'next/router'
import { ReactElement, useCallback } from 'react'
import { NextPageWithLayout } from '../types/layout'
import styled from 'styled-components'
import { useFormik  } from 'formik'
import InputBasic from '../components/inputs/InputBasic'
import ButtonBasic from '../components/buttons/ButtonBasic'
import NoneMenuLayout from '../layouts/NoneMenuLayout'
import useAccount from 'app/modules/account/useAccount'


const LoginWrapper = styled.div`
    width: 550px;
    height: 700px;
    background-color: #FFFFFF;
    margin: -120px auto 100px;
    border-radius: 20px;
    border: 1px solid #707070;
    padding: 70px 110px 0;
    display: flex;
    justify-content: center;
`


const Login: NextPageWithLayout = () => {
    const router = useRouter();
    const {
        requestLogin
    } = useAccount()

    // const dispatch = useAppDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            login(values);
        }
    })

    const login = useCallback(async (obj) => {
        const result = await requestLogin({email: obj.email, password: obj.password}).unwrap();
        if (result.errorMessage) {
            alert(result.errorMessage)
            return
        }

        router.push('/')
    }, [])

    return (
        <LoginWrapper>
            <form onSubmit={formik.handleSubmit}>
                <div>이메일</div>
                <div><InputBasic name='email' value={formik.values.email} onChange={formik.handleChange}/></div>
                <div>비밀번호</div>
                <div><InputBasic name='password' value={formik.values.password} onChange={formik.handleChange} type='password'/></div>
                <div>비밀번호를 잊으셨나요?</div>
                <div><ButtonBasic>로그인</ButtonBasic></div>
                <div><ButtonBasic designType='white'>회원가입</ButtonBasic></div>
            </form>
        </LoginWrapper>
    )
}

export default Login;

Login.getLayout = (page: ReactElement) => {
    return (
        <NoneMenuLayout>{page}</NoneMenuLayout>
    )
}