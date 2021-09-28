import React from 'react'
import styled from "styled-components"

const GitsHeader = ({clr}) => {
    return (
        <Container>
            <Wrapper>

                  <Top> Top </Top>

                  <Links>
                   <Link> overview </Link>
                   <Link clr>  Release Notes</Link>
                   <Link clr>  Help </Link>
                </Links>

            </Wrapper>

            
                <Wrap1>  GitHub Desktop </Wrap1>

                <Wrap2>Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow. </Wrap2>

                <Wrap3> Download for windows (64bit)</Wrap3>

                <Wrapping>
                     <Wrappings>
                     <Wrapping1> Download for</Wrapping1>
                     <Wrapping2 clr> macOS</Wrapping2>
                     <Wrapping3>or</Wrapping3>
                     <Wrapping4 clr>Windows(msi)</Wrapping4>
                    </Wrappings>

                    <Wrapppings>
                     <Wrapping5> By downloading, you agree to the </Wrapping5>
                     <Wrapping6 clr> Open Source Applications Terms.</Wrapping6>
                    </Wrapppings>


                </Wrapping>

            

        </Container>
    )
}

export default GitsHeader

const Container = styled.div`
width:100%;
height: 100%;
min-height: 70vh;
background-size: cover;
background-position: center;
background-color: #24292e;
background-image: url('desktopbackground.svg');
`
const Wrapper= styled.div`
display : flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-top: 80px;
margin: 30px;
color: white;
`
const Top = styled.div`
width: 100px;
height: 100px; 
border-radius: 50%;
background-color: white
`
const Link = styled.div`
margin: 0 20px;
font-weight: bold;
font-size: 18px;
cursor: pointer;
color: ${({clr}) => (clr ? '#9F7BE1': 'white' )};
:hover{
    text-decoration: underline;
}
`
const Links = styled.div`
display: flex;
padding-top: 30px;
`
const Wrapper2 = styled.div`


`

const Wrap1 = styled.div`
color: white;
margin-bottom:20px;
align-items: center;
font-size:30px
`
const Wrap2 = styled.div`
color: white;
font-size:  18px;
justify-content: center;
line-height: 1.5;

`
const Wrap3 = styled.div`
color: white;
font-size: 25px;
justify-content: center;
background-color: teal;
cursor: pointer;
line-height: 1.3;
margin-top:40px;


:hover{
    .darker
}
`
const Wrapping = styled.div`
color: white;
margin-top: 20px;


`
const Wrapping1 = styled.div`

`
const Wrapping2 = styled.div`
cursor:pointer;
color: ${({clr}) => (clr ? '#9F7BE1': 'white' )};
:hover{
    text-decoration: underline;
}
`
const Wrapping3 = styled.div`
`
const Wrapping4 = styled.div`
cursor:pointer;
color: ${({clr}) => (clr ? '#9F7BE1': 'white' )};
:hover{
    text-decoration: underline;
}
`
const Wrapping5 = styled.div`
`
const Wrapping6 = styled.div`
cursor:pointer;
color: ${({clr}) => (clr ? '#9F7BE1': 'white' )};
:hover{
    text-decoration: underline;
}
`
const Wrappings = styled.div`
display: flex;
justify-content: center;

`
const Wrapppings = styled.div`
display: flex;
justify-content: center;
`
