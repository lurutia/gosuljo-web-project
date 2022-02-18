import { RootState, useAppSelector } from 'app/store'
import withAuth from 'lib/hoc/withAuth'
import ButtonBasic from 'components/buttons/ButtonBasic'
import { ReactElement, useEffect } from 'react'
import styled from 'styled-components'
import MainLayout from '../layouts/MainLayout'
import { NextPageWithLayout } from '../types/layout'
import useBoard from 'app/modules/board/useBoard'

const Wrapper = styled.div`
`

const MainBannerWrapper = styled.div`
    width: 100%;
`

const TopBtnWrapper = styled.div`
    width: 680px;
    height: 50px;
    border: 1px solid #CCCCCC;
    border-radius: 10px;
    margin: 0 auto;
`

const BoardWrapper = styled.div`
    width: 680px;
    margin: 25px auto 0;
`

const BoardItemWraper = styled.div`
    min-height: 400px;
    border: 1px solid #CCCCCC;
    border-radius: 10px;
    margin: 25px 0;
    :last-child {
        margin-bottom: 0px;
    }
`

const BoardItemHead = styled.div`
    height: 64px;
    padding-left: 60px;
`

const BoardItemHeadTopArea = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 14px;
`

const BoardItemHeadTitleArea = styled.div`
    height: 32px;
    display: flex;
    align-items: center;
    font-size: 16px;
`

const BoardItemBody = styled.div`
    padding: 25px 60px;
`

const Home: NextPageWithLayout = () => {
    const {
        boardList,

        requestGetBoard
    } = useBoard()
    // const boardList = [{title: 'title1', contents: 'content....'}, {title: 'title2', contents: 'content....'}, {title: 'title3', contents: 'content....'},];

    useEffect(() => {
        requestGetBoard(0)
    }, [])

    return (
        <Wrapper>
            <MainBannerWrapper>
                <TopBtnWrapper>
                    <ButtonBasic>글쓰기</ButtonBasic>
                </TopBtnWrapper>
                <BoardWrapper>
                    {boardList.map(el =>
                        <BoardItemWraper>
                            <BoardItemHead>
                                <BoardItemHeadTopArea>
                                    <span>Gosuljo</span>
                                </BoardItemHeadTopArea>
                                <BoardItemHeadTitleArea>
                                    <span>{el.title}</span>
                                </BoardItemHeadTitleArea>
                            </BoardItemHead>
                            <BoardItemBody>
                                {el.contents}
                            </BoardItemBody>
                        </BoardItemWraper>
                    )}
                </BoardWrapper>
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