import React from 'react'
import styled from 'styled-components'
import {FaHome} from 'react-icons/fa'
import {GrSettingsOption} from 'react-icons/gr'
import {GiBlackFlag} from 'react-icons/gi'

const TextRunHeader = () => {
    return (
        <Container>
            <Wrapper>
                <Logo/>
                <WrapLink>
                    <Links> <FaHome/> </Links>
                    <Links> <GrSettingsOption/> </Links>
                    <Links> <GiBlackFlag/> </Links>
                </WrapLink>
            </Wrapper>
        </Container>
            
       
    )
}

export default TextRunHeader
const Container = styled.div`
height: 80px;
width: 100%;
background-color: white;
justify-content: center;
`
const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100%;
align-items: center;
justify-content: space-between;
`
const Logo = styled.div`
width: 180px;
height: 50px;
background-color: red;
`
const WrapLink = styled.div`
display: flex;
`

const Links = styled.div`
margin: 0 15px;
width: 55px;
height: 30px;
justify-content: center;
align-items: center;
color: (0 0 0 0.5);
border-radius: 5px;
cursor: pointer;

: hover{
background-color: teal;
color: white;
}
`;

