import React from 'react'
import styled from 'styled-components'

interface Props extends React.HTMLProps<HTMLInputElement> {

}

const Input = styled.input`
    width: 400px;
    height: 40px;
    border: 1px solid #D8DDE6;
    border-radius: 5px;
    margin: 5px 0;
`

const InputBasic: React.FC<Props> = (props) => {
    return (
        <Input {...props as any}/>
    )
}

export default InputBasic