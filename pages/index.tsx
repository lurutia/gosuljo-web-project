import { RootState, useAppSelector } from 'app/store'
import withAuth from 'lib/hoc/withAuth'
import { ReactElement } from 'react'
import styled from 'styled-components'
import MainLayout from '../layouts/MainLayout'
import { NextPageWithLayout } from '../types/layout'

const Wrapper = styled.div`
`

const MainBannerWrapper = styled.div`
    width: 100%;
`

const Home: NextPageWithLayout = () => {
    // The `state` arg is correctly typed as `RootState` already
    const isLogin = useAppSelector((state: RootState) => state.account.isLogin)

    return (
        <Wrapper>
            <MainBannerWrapper>
                { isLogin ? '로그인' : '로그아웃'}
            </MainBannerWrapper>
        </Wrapper>
    )
}

Home.getLayout = (page: ReactElement) => {
  return (
      <MainLayout>{page}</MainLayout>
  )
}

export default withAuth(Home)