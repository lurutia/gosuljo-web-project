import styled from "styled-components"

const Button = styled.button`
`

interface Props {
    title: string
    depth: number
    pages: any[]
}

const ListItem: React.FC<Props> = (props) => {
    const {
        title,
        depth,
        pages
    } = props

    console.log('title', title);

    return (
        <div>
            <Button>{title}</Button>
        </div>
    )
}

export default ListItem
