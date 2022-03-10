import styled, { css } from 'styled-components'

interface Props extends React.HTMLProps<HTMLDivElement> {
}

const Card = styled.div`
    width: 100%;
    box-shadow: -8px 12px 18px 0 rgb(25 42 70 / 13%);
    background-color: #fff;
    border: 0 solid #DFE3E7;
    border-radius: 5px;
`

const CardHeader = styled.div`
    
`

const CardBody = styled.div`
    padding: 20px;
`

const CardFooter = styled.div`
    
`

const CardBasic: React.FC<Props>  = (props) => {
    const {
        children,
        ...rest
    } = props

    return (
        <Card {...rest as any}>
            <CardHeader>

            </CardHeader>
            <CardBody>
                {children}
            </CardBody>
            <CardFooter>
                
            </CardFooter>
        </Card>
    )
}

export default CardBasic