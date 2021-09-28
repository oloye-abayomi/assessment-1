import React from 'react'
import { icons } from 'react-icons'
import styled from 'styled-components'
import {AiFillHome} from 'react-icons/ai'
import {FiSettings} from 'react-icons/fi'
import {BsFlag} from 'react-icons/bs'
import {Link} from 'react-router-dom'


export const ProjectHome = () => {
    return (

        <Container>
            <Wrapper>
                <Logo/>
                <WrapLink>

                <Links to="/"> <AiFillHome/> </Links>
                <Links to="/Project"> <FiSettings/>  </Links>
                <Links to="About">< BsFlag/> </Links>
                    


                </WrapLink>
            </Wrapper>
        </Container>



                

            

        
        
        
    )
}
export default ProjectHome

const WrapLink= styled.div`
display: flex;

`
const Container= styled.div`
width: 100%;
height: 80%;
background-color: white;
color: black;

`
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;

`
const Logo = styled.div`
width: 300px;
height: 50px;
background-color: red;
object-fit: contain;
`
const Links = styled(Link)`
margin: 0 10px;
color: black;
cursor: pointer;
width: 80px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
transition: all 350ms;
background-color: rgba(0, 0, 0, 0.1);

:hover {
    background-color: teal;
    color: white;

}

`