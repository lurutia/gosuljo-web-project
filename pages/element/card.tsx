import CardBasic from 'components/cards/CardBasic'
import MainTitle from 'layout-components/MainTitle'
import ElementLayout from 'layouts/ElementLayout'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { NextPageWithLayout } from 'types/layout'

const CardWraper = styled.div`
    display: flex;
    margin: 0 25px;
`

const CardPage: NextPageWithLayout = () => {

    return (
        <>
            <MainTitle
                title='Card'
                decription='Card는 다양한 콘텐츠를 담는 컨테이너입니다.'
            />
            <CardWraper>
                <CardBasic>
                    Hello Card!
                </CardBasic>
            </CardWraper>
            
        </>
    )
}

CardPage.getLayout = (page: ReactElement) => {
  return (
      <ElementLayout>{page}</ElementLayout>
  )
}

export default CardPage