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
    return (
        <Wrapper>
            <MainBannerWrapper>

            </MainBannerWrapper>
        </Wrapper>
    )
}

export default Home

Home.getLayout = (page: ReactElement) => {
  return (
      <MainLayout>{page}</MainLayout>
  )
}