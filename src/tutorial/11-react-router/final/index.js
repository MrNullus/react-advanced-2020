import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from ' ./Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route exact path='/' component={Home}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/people' component={People}/>
        <Route exact path='/person/:id' component={Person}/>
        <Route exact path='*' component={Error}/>\
      </Routes> 
    </Router>
  );
};

export default ReactRouterSetup;
