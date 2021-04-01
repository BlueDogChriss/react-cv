import React from 'react';
import {Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./components/";
import Description from "./components/Description"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contacts from "./components/Contacts"

function App() {

  return(
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/description" component={Description}/>
    <Route path="/experience" component={Experience}/>
    <Route path="/projects" component={Projects}/>
    <Route path="/contact" component={Contacts}/>
    </>
    
  );
}

export default App;
