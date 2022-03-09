import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown19, faGauge, faGear, faPalette, faSquare, faSquareCaretDown, faSquareUpRight, faTabletButton } from "@fortawesome/free-solid-svg-icons"

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
        "link": "/element",
        "icon": <FontAwesomeIcon icon={faGauge} />
    },
    {
        "label": "UI Element",
        "icon": <FontAwesomeIcon icon={faPalette} />,
        "content": [
            {
                "label": "Card",
                "link": "/element/card",
                "icon": <FontAwesomeIcon icon={faSquare} />,
            },
            {
                "label": "Buttons",
                "link": "/element/buttons",
                "icon": <FontAwesomeIcon icon={faTabletButton} />,
            },
            {
                "label": "Dropdowns",
                "link": "/element/dropdowns",
                "icon": <FontAwesomeIcon icon={faSquareCaretDown} />,
            },
            {
                "label": "Modals",
                "link": "/element/modals",
                "icon": <FontAwesomeIcon icon={faSquareUpRight} />,
            },
            {
                "label": "Paginations",
                "link": "/element/paginations",
                "icon": <FontAwesomeIcon icon={faArrowDown19} />,
            },
        ]
    },
    {
        "label": "Form Element",
        "content": [
            {
                "label": "Input",
                "link": "/element/input",
            },
            {
                "label": "Select",
                "link": "/element/select",
            },
            {
                "label": "Radio",
                "link": "/element/radio",
            },
            {
                "label": "Checkbox",
                "link": "/element/checkbox",
            },
            {
                "label": "Textarea",
                "link": "/element/textarea",
            },
        ]
    },
    {
        "label": "Table",
        "link": "/element/table"
    },
    {
        "label": "Chart",
        "link": "/element/chart"
    },
    {
        "label": "Typography",
        "link": ""
    },
]

export default navItems