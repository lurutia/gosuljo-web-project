import { useRouter } from 'next/router'
import { ReactElement, useCallback } from 'react'
import { NextPageWithLayout } from '../types/layout'
import styled from 'styled-components'
import { useFormik  } from 'formik'
import InputBasic from '../components/inputs/InputBasic'
import ButtonBasic from '../components/buttons/ButtonBasic'
import NoneMenuLayout from '../layouts/NoneMenuLayout'
import useAccount from 'app/modules/account/useAccount'


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
    const router = useRouter()
    const { requestSignUp } = useAccount()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            checkPassword: '',
        },
        onSubmit: values => {
            signUp(values);
        }
    })

    const signUp = useCallback(async (obj) => {
        const result = await requestSignUp(obj).unwrap()
        console.log(result)
        if (result.errorMessage) {
            alert(result.errorMessage)
            return
        }

        router.push('/')
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