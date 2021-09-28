import React from 'react'
import styled from 'styled-components'

const Games = () => {
    return (
        <Container> 
            <Wrapper>
                <WrapperName> Local Game </WrapperName>
                <WrapperRoll>

                    <PlayNumber>

                    <WrapperRollMe>player 1 </WrapperRollMe>

                    <NumberBox>
                        <Number>1</Number>
                        <Number>2</Number>
                        <Number>3</Number>
                        <Number>4</Number>
                        <Number>5</Number>
  
                    </NumberBox>
                    </PlayNumber>
                        

                    <WrapperRollComp>computer </WrapperRollComp>

                   </WrapperRoll>

                   <Results>Result</Results>
                
                
                
            </Wrapper>
        </Container>
        
        
    )
}

export default Games

const Container = styled.div`
width:100%;
height:100%;
min-height:100vh;
background-color: teal;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
padding-top: 100px;
`
const WrapperName= styled.div`
font-size: 30px;
font-weight: bold;
display: flex;
flex: wrap;
align- items: center;
`
const WrapperRoll= styled.div`
display: flex;
justify-content: space-around;
width: 80%;  
flex-wrap: wrap;
align-items: center;

`

const WrapperRollMe = styled.div`
width: 250px;
height: 250px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: bold;
border-radius: 20px;
cursor: pointer;

`
const WrapperRollComp = styled.div`
width: 250px;
height: 250px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: bold;
border-radius: 20px;
`
const BoxMeNo = styled.div`
 
`
const Results = styled.div`
font-size: 30px;
padding-top: 100px;
font-weight: bold;
cursor: pointer;
`
const NumberBox= styled.div`
display: flex;
align-items: center;
margin: 20px;
`

const Number= styled.div`
font-weight: bold;
font-size: 20px; 
justify-content: space-between;
padding-top: 50px;
width: 40px;
cursor: pointer;
background-color: brown;
border-radius: 50%;

`
const PlayNumber= styled.div`
margin: 30px;

`
