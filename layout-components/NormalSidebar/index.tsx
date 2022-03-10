import Link from "next/link"
import { Fragment, MouseEvent, useState } from "react"
import styled from "styled-components"
import { NextPageWithLayout } from "types/layout"
import PerfectScrollbar from 'react-perfect-scrollbar'
import SidebarUserbox from "layout-components/SidebarUserbox"
import SidebarFooter from "layout-components/SidebarFooter"
import SidebarMenu from "layout-components/SidebarMenu"
import navItemsData from './navItems'
import produce from "immer"

const SidebarHeader = styled.div`
`

const Sidebar = styled.aside`
    width: 240px;
    min-height: calc(100vh - 140px - 44px);
    background: #293949;
    float: left;
`;

const LeftsideNavigation = styled.div`
    
`;

const NavigationUl = styled.ul`
    margin: -2px 0 0;
`

const NormalSidebar: NextPageWithLayout = ({children}) => {
    
    const [navItems, setNavItems] = useState(navItemsData);

    const openSubMenu = (e: MouseEvent<HTMLButtonElement>, idx: number) => {
        e.stopPropagation()
        const nextNavItems = produce(navItems, next => {
            next[idx].open = !next[idx].open
        })
        setNavItems(nextNavItems)
    }
    
    return (
        <Fragment>
            <Sidebar>
                <PerfectScrollbar>
                    <LeftsideNavigation>
                            <NavigationUl>
                                {navItems.map((item, idx) => 
                                    <SidebarMenu
                                        navItem={item}
                                        openSubMenu={openSubMenu}
                                        idx={idx}
                                        key={item.label}
                                    />
                                )}
                            </NavigationUl>
                    </LeftsideNavigation>
                </PerfectScrollbar>
            </Sidebar>
        </Fragment>
    )
}

export default NormalSidebar