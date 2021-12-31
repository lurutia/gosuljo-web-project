import styled, { css } from 'styled-components'

interface Props extends React.HTMLProps<HTMLButtonElement>{
    designType?: 'primary' | 'white'
}

const Button = styled.button<{ designType?: 'primary' | 'white' }>`
    width: 400px;
    height: 50px;
    border-radius: 5px;
    border-color: transparent;
    margin: 5px 0;
    background-color: #1C6EFF;
    font-size: 18px;
    color: white;

    ${props => props.designType === 'white' && 
    css`
        background-color: white;
        border: 1px solid #1C6EFF;
        color: #0080FF;
    `}
`

const ButtonBasic: React.FC<Props>  = (props) => {
    const {
        children,
        designType
    } = props

    return (
        <Button
            designType={designType}
            {...props as any}
        >{children}</Button>
    )
}

ButtonBasic.propTypes

export default ButtonBasic