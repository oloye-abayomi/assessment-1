import React from 'react'
import styled from 'styled-components'
import img from '../Project/pj image.png'
import MyButton from './MyButton'

const Project = () => {
    return (
        <Container>
            <Wrapper>
                <ContainerBox>
                    <Title> Best WP Project Bidding Theme – Freelance Marketplace 2021</Title>

                    <Content>The most complete freelancer marketplace theme in the world. Build your freelancer website with the best template. Finest written code and awesome customer support!  </Content>
                    <Sub> Starting from <span> <Sap>$ </Sap>149 </span> <MyButton name= "see pricing" bg bg1/> </Sub>
                    <Button>
                        <MyButton name= "View Demo"/>
                        <MyButton name= "Purchase Theme"/>
                    </Button>
                </ContainerBox>
                <Image src= {img}/>
            
            </Wrapper>
            
           </Container>
            
       
    )
}

export default Project

const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-image: url('bkg.jpg');
background-size: cover;
background-position: center;
background-repeat: no-repeat;
`
const Wrapper = styled.div`
padding:100px;
display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;

`
const ContainerBox = styled.div`
margin-left: auto;
min-width: 300px;
width: 400px;
height:500px;
color: white;
margin-left: 5px;

`
const Content = styled.div`

`
const Image = styled.img`
min-width: 300px;
width: 400px;
height:500px;
object-fit: contain;
margin-left: 5px 0;

`
const Button = styled.div`
display: flex;
`
const Title= styled.h2``
const Sub = styled.div`
display: flex;
margin: 5px;
align-items: center;

span{
    margin-left: 5px;
    color: lightgreen;
    font-weight: bold;
    display: flex;

}
`
const Sap =styled.div`
margin: 3px 1;
font-size: 12px;
`
