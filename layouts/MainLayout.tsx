import Link from "next/link"
import styled from "styled-components"
import { NextPageWithLayout } from "../types/layout"

const Wrapper = styled.div`
 `
const NavWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 44px;
    background-color: #333333;
`

const Nav = styled.nav`
    width: 1280px;
    height: 44px;
`

const Ul = styled.ul`
    height: 44px;
    display: flex;
`

const Li = styled.li`
    height: 44px;
    display: flex;
    align-items: center;
    margin: 0 8px;
    color: #d6d6d6;
    :hover {
        color: white;
    }
`

const Main = styled.article`
`

const Footer = styled.footer`
    height: 270px;
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


const MainLayout: NextPageWithLayout = ({children}) => {
    return (
        <Wrapper>
            <NavWrapper>
                <Nav>
                    <Ul>
                        <Li>
                            <Link href={'/'}>gosuljo</Link>
                        </Li>
                        <Li>
                            <Link href={'#'}>소개</Link>
                        </Li>
                        <Li>
                            <Link href={'#'}>마이페이지</Link>
                        </Li>
                    </Ul>
                </Nav>
            </NavWrapper>
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

export default MainLayout