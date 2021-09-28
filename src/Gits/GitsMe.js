import React from 'react'
import styled from 'styled-components'
import GitsHeader from './GitsHeader'
import GitsBody from './GitsBody'


const gitsMe = () => {
    return (
       <Container>
           <GitsHeader/>
       </Container> 
    )
}

export default gitsMe

const Container = styled.div`
width: 100%
min-height: 100vh;
height: 100%; 

`