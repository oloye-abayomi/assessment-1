import React from 'react'
import styled from "styled-components"
import {AiOutlineHome} from "react-icons/ai"
import Hero from './Hero'


const NewHeader = () => {
    return (
        <Container>/
            <Wrapper>
                <Logo  />
                
                <Links>
                <Link> <AiOutlineHome/> Home  </Link>
                <Link> <AiOutlineHome/> Service </Link>
                <Link> <AiOutlineHome/> video </Link>
                <Link>  <AiOutlineHome/> Contact </Link>
                </Links>
                 </Wrapper>
                 
                 <Hero/>
           
             </Container>
           
            
            
    
    )
}

export default NewHeader

const Container = styled.div`
`
const Wrapper = styled.div`
width: 100%;
height: 50px;
background-color: teal;
display: flex

`
const Logo= styled.div`
width: 300px;
height: 50px;
background-color: yellow;
`
const Link = styled.div`
width: 100px;
height: 40px;


:hover{
    text-decoration: underline;
    cursor: pointer;

`
const Links = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-left: 40px;
font-weight: bold;

`