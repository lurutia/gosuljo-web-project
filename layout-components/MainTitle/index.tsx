import styled from "styled-components";

interface Props {
    title: string
    decription?: string
}

const TitleWrapper = styled.div`
    margin: 10px;
`

const TitleDiv = styled.div`
    font-size: 2rem;
    color: #475F7B;
`

const DescriptionDiv = styled.div`
    font-size: 0.9rem;
    color: #6c757d;
    margin: 10px 0;
`

const MainTitle: React.FC<Props> = (props) => {

    const {
        title,
        decription,
    } = props;

    return (
        <TitleWrapper>
            <TitleDiv>
                {title}
            </TitleDiv>
            {decription ? 
            <DescriptionDiv>
                {decription}
            </DescriptionDiv>
            : null}
            
        </TitleWrapper>
        
    )
}

export default MainTitle