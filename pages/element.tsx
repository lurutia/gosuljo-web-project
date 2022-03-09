import { RootState, useAppSelector } from 'app/store'
import ElementLayout from 'layouts/ElementLayout'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { NextPageWithLayout } from '../types/layout'

const Wrapper = styled.div`
`

const MainBannerWrapper = styled.div`
    width: 100%;
`

const Element: NextPageWithLayout = () => {

    return (
        <Wrapper>
            <MainBannerWrapper>
            </MainBannerWrapper>
        </Wrapper>
    )
}

Element.getLayout = (page: ReactElement) => {
  return (
      <ElementLayout>{page}</ElementLayout>
  )
}

export default Element