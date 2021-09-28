import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const MyGame = () => {

    const [userInput,setUserInput] = useState(0)
    const [computerInput, setComputerInput] =useState(0) 

    const computerRandom = () =>{
        setComputerInput(Math.floor(Math.random() *5))

    }
    useEffect(()=>{
        setInterval(() => {
            computerRandom()
        }, 5000);
    },[])
    return (
        <div>
            
            <Container>
             <Wrapper>
                <WrapperName> Oloye's Game</WrapperName>
                <WrapperRoll>
                   
                    <WrapperRollMe>
                      
                        <WrapperBoxMe>{userInput} </WrapperBoxMe>
                        <NumberBox> 
                             <Number onClick= {() =>setUserInput(1)} >1</Number>
                             <Number onClick= {() =>setUserInput(2)}>2</Number>
                             <Number onClick= {() =>setUserInput(3)} >3</Number>
                             <Number onClick= {() =>setUserInput(4)}>4</Number>
                             <Number onClick= {() =>setUserInput(5)}>5</Number>
                        </NumberBox>
                        <WrapperTextMe> oloye </WrapperTextMe>
                            
                             </WrapperRollMe>
                        
                          <WrapperRollComp>
                        
                        <WrapperBoxMe> {computerInput} </WrapperBoxMe>

                        <WrapperTextMe> Computer </WrapperTextMe>

                        </WrapperRollComp>
                </WrapperRoll>
                <Result> {} </Result>
              </Wrapper>
                
            </Container>
            
        </div>
    )
}

export default MyGame
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-color: blue;
`
const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
align-items: center;
padding: 20px;
`
const WrapperName = styled.div`
font-size: 30px;
font-weight: bold;
display: flex;
flex: wrap;
align- items: center;
`
const WrapperRollMe = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;
`
const WrapperRollComp = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 15px 0;

`
const WrapperRoll = styled.div`
display: flex;
justify-content: space-around;
width: 70%;
flex-wrap: wrap;
`
const WrapperBoxMe= styled.div`
width: 250px;
height:250px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
font-size: 20px;
font-weight: bold;
border-radius: 7px;
cursor: pointer;
`
const WrapperTextMe= styled.div`
font-size: 20px;
padding: 10px 0;
`
const Result = styled.div`
width: 250px;
padding: 15px;
background-color: white;
text-align: center;
font-size: 19px;
border-radius: 7px;
cursor: pointer;
`
const NumberBox= styled.div`
display: flex;
`
const Number=styled.div`
font-size:18px;
padding: 4px 10px;
background: white;
margin: 10px 4px;
border-radius: 50px;
cursor: pointer;

`