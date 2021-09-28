import React from 'react'
import styled from 'styled-components'
//import img from './Reason/nelson mandela.jpg'
import {RiSingleQuotesL, RiSingleQuotesR} from 'react-icons/ri'


const Reason = () => {
    return (
        <Container>
            <Wrapper> 
                <Wrap>
                    <Header>Be  Motivated</Header>
                    <Logo/>
                    </Wrap>
                     
                       <Content>
                           What counts in life is not the mere fact that we have lived. It is what difference we have made to the lives of others that will determine the significance of the life we lead.
                       </Content>
                    
                    <Name>Nelson Mandela</Name>
                    <Time>1988</Time>
                    
                    </Wrapper>
              
                
             </Container>
            
       
    )
}

export default Reason

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100px;
`
const Wrapper = styled.div`
width: 350px;
height: 350px;
background-color: white;
border-radius: 10px;
margin: 20px;
flex: wrap;
`
const Header = styled.div`
font-weight: bold;
`
const Logo = styled.div`
width: 80px;
height: 80px;
border-radius: 50%;
background-color: wheat;
`
const Wrap= styled.div`
display: flex;
justify-content: space-between;
margin: 0 20px;
padding-top: 10px;
`
const Content=styled.div`
margin: 0 20px;
padding-top: 30px;
font-weight: bold;
justify-content: center;
align-items: center;
`
const Name=styled.div`
justify-content: center;
align- items: center;
padding-left: 100px;
padding-top: 50px;
font-size: 20px;
font-weight: bold;
`
const Time= styled.div`
justify-content: center;
align- items: center;
padding-left: 150px;
font-size: 20px;
font-weight: bold;
`