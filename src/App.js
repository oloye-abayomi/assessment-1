import React from 'react'
/*import { ProjectHome } from './Project/ProjectHome'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//import ProjectSettings from './Project/ProjectSettings'
import projectAbout from './Project/projectAbout'
import Home from './Project/Home'
import Project from "./Project/Project";npm install @mui/material @emotion/react @emotion/styled*/

import NewHeader from './NEW/NewHeader'
import styled from "styled-components"


/*const App = () => {
  return (
    <Router>
      <ProjectHome/>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Project" exact component={Project}/>
        <Route path="/About" exact component= {projectAbout}/>


      </Switch>
    </Router>
  )
}

export default App*/

const App = () => {
  return(
      <Container>
        <NewHeader/>
      </Container>
  )
}
export default App

const Container = styled.div``