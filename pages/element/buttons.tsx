import ButtonBasic from 'components/buttons/ButtonBasic'
import CardBasic from 'components/cards/CardBasic'
import MainTitle from 'layout-components/MainTitle'
import ElementLayout from 'layouts/ElementLayout'
import { ReactElement } from 'react'
import styled from 'styled-components'
import { NextPageWithLayout } from 'types/layout'

const CardWraper = styled.div`
    margin: 0 25px;
    .card {
        &:nth-child(n) {
            margin-bottom: 2.2em;
        }
    }
`

const ButtonWrapper = styled.div`
    .btn {
        &:nth-child(n) {
            margin: 0 5px;
        }
    }
`

const ButtonPage: NextPageWithLayout = () => {

    return (
        <>
            <MainTitle
                title='Button'
                decription='다양한 크기, 색상등 상황에 맞는 custom button입니다.'
            />
            <CardWraper>
                <CardBasic className="card">
                    <ButtonWrapper>
                        <ButtonBasic className="btn" text="Button" size={'small'} />
                        <ButtonBasic className="btn" text="Button" size={'medium'} />
                        <ButtonBasic className="btn" text="Button" size={'large'} />
                    </ButtonWrapper>
                </CardBasic>

                <CardBasic className="card">
                    <ButtonWrapper>
                        <ButtonBasic className="btn" text="Button" designType='primary' />
                        <ButtonBasic className="btn" text="Button" designType='secondary' />
                        <ButtonBasic className="btn" text="Button" designType='danger' />
                        <ButtonBasic className="btn" text="Button" designType='info' />
                        <ButtonBasic className="btn" text="Button" designType='success' />
                        <ButtonBasic className="btn" text="Button" designType='warning' />
                        <ButtonBasic className="btn" text="Button" designType='dark' />
                        <ButtonBasic className="btn" text="Button" designType='light' />
                    </ButtonWrapper>
                </CardBasic>
            </CardWraper>
        </>
    )
}

ButtonPage.getLayout = (page: ReactElement) => {
  return (
      <ElementLayout>{page}</ElementLayout>
  )
}

export default ButtonPage