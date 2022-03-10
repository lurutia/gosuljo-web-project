import styled from 'styled-components'

type DesignType = 'primary' | 'secondary' | 'danger' | 'info' | 'success' | 'warning' | 'dark' | 'light'

interface Props extends Omit<React.HTMLProps<HTMLButtonElement>, "size"> {
    designType?: DesignType
    size?: 'small'|'medium'|'large'
    fontSize?: number
    text: string
}

interface IButton {
    designType?: DesignType
    size: 'small'|'medium'|'large'
    width?: number
    height?: number
    fontSize?: number
}

const Button = styled.button<IButton>`
    width: ${props => props.width ? props.width : props.size === 'small' ? 75 : props.size === 'medium' ? 95 : 105}px;
    height: ${props => props.height ? props.height : props.size === 'small' ? 35 : props.size === 'medium' ? 40 : 45}px;
    font-size: ${props => props.fontSize ? props.fontSize : props.size === 'small' ? 15 : props.size === 'medium' ? 17 : 19}px;
    border-radius: 5px;
    /* border-color: transparent; */
    /* margin: 5px 0; */
    /* background-color: #1C6EFF; */
    /* color: white; */

    ${props => props.designType === 'primary' ?
    `
        background-color: #1C6EFF;
        border: 1px solid #1C6EFF;
        color: white;
    `: props.designType === 'secondary' ?
    `
        background-color: #A3AFBD;
        border: 1px solid #A3AFBD;
        color: white;
    `: props.designType === 'danger' ?
    `
        background-color: #FF5B5C;
        border: 1px solid #FF5B5C;
        color: white;
    `: props.designType === 'info' ?
    `
        background-color: #00abb7;
        border: 1px solid #00abb7;
        color: white;
    `: props.designType === 'success' ?
    `
        background-color: #25c777;
        border: 1px solid #25c777;
        color: white;
    `: props.designType === 'warning' ?
    `
        background-color: #FDAC41;
        border: 1px solid #FDAC41;
        color: white;
    `: props.designType === 'dark' ?
    `
        background-color: #222f3e;
        border: 1px solid #222f3e;
        color: white;
    `: props.designType === 'light' ?
    `
        border: 1px solid #5A8DEE;
        color: #5A8DE;
    ` : ``}
`

const ButtonBasic: React.FC<Props>  = (props) => {
    const {
        designType = 'primary',
        size = 'medium',
        text,
        ...rest
    } = props

    return (
        <Button
            designType={designType}
            size={size}
            {...rest as any}
        >{text}</Button>
    )
}

ButtonBasic.propTypes

export default ButtonBasic