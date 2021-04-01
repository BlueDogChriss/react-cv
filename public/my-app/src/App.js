import React from 'react';
import {Route} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Home from "./components/";
import Description from "./components/Description"

function App() {

  return(
    <>
    <CssBaseline/>
    <Route exact path="/" component={Home}/>
    <Route path="/description" component={Description}/>
    </>
    
  );
}

export default App;
