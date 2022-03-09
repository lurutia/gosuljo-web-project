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
        "link": "/element",
        "icon": <FontAwesomeIcon icon={faGauge} />
    },
    {
        "label": "UI Element",
        "content": [
            {
                "label": "Buttons",
                "link": "/element/buttons",
                "icon": <FontAwesomeIcon icon={faGear} />,
            },
            {
                "label": "Dropdowns",
                "link": "/element/dropdowns",
            },
            {
                "label": "Modals",
                "link": "/element/modals",
            },
            {
                "label": "Paginations",
                "link": "/element/paginations",
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