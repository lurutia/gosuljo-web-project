import { useRouter } from 'next/router'
import { ReactElement, useCallback } from 'react'
import PresentationLayout from '../layouts/PresentationLayout'
import { NextPageWithLayout } from '../types/layout'
import styled from 'styled-components'
import { useFormik  } from 'formik'
import InputBasic from '../components/inputs/InputBasic'
import ButtonBasic from '../components/buttons/ButtonBasic'
import axios, {AxiosResponse, AxiosError} from 'axios';
import { serverUrl } from '../config/const'
import { ResultVO } from '../types/common'

const Wrapper = styled.div`
    background-color: #E6E9F0;
`

const Head = styled.header`
    height: 420px;
    background-color: #476FF3;
`

const HeadBar = styled.div`
    height: 70px;
`

const Logo = styled.div`
    width: 240px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 32px;
`

const Main = styled.article`
    height: 720px;
`

const LoginWrapper = styled.div`
    max-width: 620px;
    height: 700px;
    background-color: #FFFFFF;
    margin: -120px auto 0;
    border-radius: 20px;
    border: 1px solid #707070;
    padding: 70px 110px 0;
`

const Footer = styled.footer`
    height: 270px;
    background-color: #343F55;
`

const Login: NextPageWithLayout = () => {
    const router = useRouter();

    const myAxios = axios.create({
        baseURL: serverUrl
    })

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
        await myAxios.post('/account/login', obj).then((res: AxiosResponse) => {
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
        <Wrapper>
            <Head>
                <HeadBar>
                    <Logo>
                        gosuljo
                    </Logo>
                </HeadBar>
            </Head>
            <Main>
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
            </Main>
            <Footer></Footer>
        </Wrapper>
    )
}

export default Login;

Login.getLayout = (page: ReactElement) => {
    return (
        <PresentationLayout>{page}</PresentationLayout>
    )
}