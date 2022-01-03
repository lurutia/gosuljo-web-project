import styled from "styled-components";
import { NextPageWithLayout } from "../types/layout";

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
    height: auto;
    min-height: calc(100vh - 420px - 270px);
`

const Footer = styled.footer`
    height: 270px;
    background-color: #343F55;
`

const NoneMenuLayout: NextPageWithLayout = ({children}) => {
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
            {children}
        </Main>
        <Footer></Footer>
    </Wrapper>
    )
}

export default NoneMenuLayout;