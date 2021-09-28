import React from 'react'
import styled from  "styled-components"
import Icon from './githubImages/desktop-icon.svg'

const TopHeader = ( {clr}) => {
    return (
        <Container>
            <Wrapper>
                <Logo src={Icon}/>
                <Links>
                <Link> Overview </Link>
                <Link clr>  Release Notes </Link>
                <Link clr> Help </Link>
                </Links>

            </Wrapper>

        </Container>
            
        
    )
}

export default TopHeader
 const Container = styled.div`
 width: 100%;
 height:70vh;
 background-image: url('desktopbackground.svg');
 background-size: cover;
 background-position: center;
 background-color: #24292e;
 `
 const Wrapper = styled.div`
 padding: 20px 0px;
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
 `
 const Logo = styled.img`
 width: 100px;
 height: 100px; 
 border-radius: 50%;
 margin top: 20px;
 object-fit: cover;
 `
 const Link = styled.div`
 margin:0px 20px;
 font-weight: bold;
 color: ${({clr}) =>(clr ? '#9F7BE1':'white')};
 cursor: pointer;

 :hover{
     text-decoration: underline;
 }
 `
 const Links =styled.div`
 display: flex;
 `