import React from 'react'
import styled from 'styled-components'
import {BiHomeSmile} from "react-icons/bi"
import {RiSettings5Line} from 'react-icons/ri'
import {FcAbout} from 'react-icons/fc'
import img from "../github/githubImages/download.png"

import {Link} from "react-router-dom"
const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={img}/>
                <NavLink>
                    <MyLink to="/"> 
                    <BiHomeSmile/>
                    </MyLink>
                    <MyLink to="/Settings">
                        <RiSettings5Line/>
                        </MyLink>
                    <MyLink to="/About">
                        <FcAbout/>
                        </MyLink> 
                </NavLink>
            
            </Wrapper>
           
        </Container>
    )
}

export default Header

const NavLink=styled.div`
display: flex;
`
const Container = styled.div`
width: 100%;
height:80px;
Background-color: white;
color: black;
`
const Logo = styled.img`
width: 300px;
height: 50px;
background-color: red;
object-fit: contain;
`
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align items: center;
justify-content: space-between;
`
const MyLink = styled(Link)`
margin: 0 10px;
width: 80px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 5px;
transition: all 350ms;
background-color: rgba(0,0,0,0.1);
cursor: pointer;
text-decoration: none;

:hover{
    background-color: teal;
    color: white;
}
`;