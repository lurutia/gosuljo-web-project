import Link from "next/link"
import { Fragment } from "react"
import styled from "styled-components"
import { NextPageWithLayout } from "types/layout"

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

const NormalHeader: NextPageWithLayout = ({children}) => {
    return (
        <Fragment>
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
        </Fragment>
    )
}

export default NormalHeader