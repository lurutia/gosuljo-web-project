import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight, faGauge, faGear } from "@fortawesome/free-solid-svg-icons"

export type NavItem = {
    link?: string
    label: string
    open?: boolean
    icon?: JSX.Element
    content?: NavSubItem[]
}

type NavSubItem = {
    link?: string
    label: string
    icon?: JSX.Element
}

type NavItems = NavItem[]

const navItems: NavItems = [
    {
        "label": "Dashboard",
        "link": "index.html",
        "icon": <FontAwesomeIcon icon={faGauge} />
    },
    {
        "label": "UI Element",
        "open": false,
        "content": [
            {
                "label": "Buttons",
                "link": "#",
                "icon": <FontAwesomeIcon icon={faGear} />
            },
            {
                "label": "Inputs",
                "link": "#",
            }
        ]
    },
    {
        "label": "Editors",
        "open": false,
        "content": [
            {
                "label": "form",
                "link": "#",
            }
        ]
    },
    {
        "label": "Typography",
        "link": ""
    },
]

export default navItems;