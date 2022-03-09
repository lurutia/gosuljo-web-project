import { MouseEvent } from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { NavItem } from "layout-components/NormalSidebar/navItems"

interface Props {
    navItem: NavItem
    openSubMenu(e: MouseEvent<HTMLAnchorElement>, idx: number): void
    idx: number
}

const NavigationLi = styled.li`
    border-bottom: 1px solid rgba(255,255,255,.05);
`

interface INavigationAtag {
    active?: boolean
}
const NavigationAtag = styled.a<INavigationAtag>`
    color: ${props => props.active ? '#1abc9c':'#aeb2b7'};
    display: block;
    padding: 18px 0 18px 25px;
    font-size: 12px;
    &:hover {
        color: #1abc9c;
    }
`

interface INavigationSubUl {
    open?: boolean
}
const NavigationSubUl = styled.ul<INavigationSubUl>`
    margin: -2px 0 0;
    display: ${props => props.open ? 'block':'none'};
`

const NavigationSubLi = styled.li`
    background: #23313f;
`

interface INavigationSubAtag {
    active?: boolean
}
const NavigationSubAtag = styled.a<INavigationSubAtag>`
    color: ${props => props.active ? '#1abc9c':'#aeb2b7'};
    display: block;
    padding: 18px 0 18px 25px;
    &:hover {
        color: #1abc9c;
    }

    font-size: 12px;
    padding-top: 13px;
    padding-bottom: 13px;
`

const NavTitle = styled.span`
    display: inline-block;
`

interface INavIcon {
    align?: 'right'
}
const NavIcon = styled.div<INavIcon>`
    display: inline-block;
    width: 20px;
    .fa-angle-left, .fa-angle-right {
        padding-top: 3px;
    }
    ${props => props.align === 'right' ? 'float: right;':''}
`

const SidebarMenu: React.FC<Props> = (props) => {
    const {
        navItem,
        openSubMenu,
        idx,
    } = props

    
    const recursiveItemList = (navItem: NavItem): any => {
        if (navItem.content) {
            return (
                <>
                    <NavigationAtag onClick={(e) => openSubMenu(e, idx)}>
                        <NavIcon>{navItem.icon}</NavIcon><NavTitle>{navItem.label}</NavTitle><NavIcon align="right"><FontAwesomeIcon size="sm" icon={faChevronRight} /></NavIcon>
                    </NavigationAtag>
                    <NavigationSubUl open={navItem.open}>
                        {navItem.content.map(content => 
                            <NavigationSubLi>
                                <NavigationSubAtag href={content.link}>
                                    <NavIcon>{content.icon}</NavIcon>{content.label}
                                </NavigationSubAtag>
                            </NavigationSubLi>
                        )}
                    </NavigationSubUl>
                </>
            )
        } else {
            return (
                <NavigationAtag href="javascript:;">
                    <NavIcon>{navItem.icon}</NavIcon><NavTitle>{navItem.label}</NavTitle>
                </NavigationAtag>
            )
        }
    }

    return (
        <>
            <NavigationLi>
                {recursiveItemList(navItem)}
            </NavigationLi>
        </>
    )
}

export default SidebarMenu
