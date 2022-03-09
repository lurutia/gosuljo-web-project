import NormalHeader from "layout-components/NormalHeader"
import NormalSidebar from "layout-components/NormalSidebar"
import styled from "styled-components"
import { NextPageWithLayout } from "../types/layout"

const Wrapper = styled.div`
`

const Main = styled.article`
    height: auto;
    width: calc(100vw - 240px);
    min-height: calc(100vh - 140px - 44px);
    background-color: #EEEFFE;
    float: left;
`

const Footer = styled.footer`
    clear: both;
    height: 120px;
    background-color: #E6E9F0;
    display: flex;
    justify-content: center;
    padding-top: 20px;
`

const FooterContentWrapper = styled.div`
    width: 1280px;
`

const FooterContent = styled.div`
    color: #707070;
    font-size: 13px;
    margin: 5px;
`


const ElementLayout: NextPageWithLayout = ({children}) => {
    return (
        <Wrapper>
            <NormalHeader />
            <NormalSidebar />
            <Main>
                {children}
            </Main>
            <Footer>
                <FooterContentWrapper>
                    <FooterContent>
                        Copyright © 2022 Gosuljo 모든 권리 보유.
                    </FooterContent>
                    <FooterContent>
                        주소: my home
                    </FooterContent>
                </FooterContentWrapper>
            </Footer>
        </Wrapper>
    )
}

export default ElementLayout