import React from 'react';

// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// pages
import Home from './Home';
import About from './About';
import People from './People';
import Error from './Error';
import Person from './Person';
// navbar
import Navbar from './Navbar';

const ReactRouterSetup = () => {

  return (
    <div>
      <h2>react router</h2>
      <br/>

      <Navbar />

      <br/>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Home /> }/>

          <Route exact path="/about" element={ <About /> }/>

          <Route exact path="/people" element={ <People /> }/>

          <Route exact path="/person/:id" element={ <Person /> }/>

          <Route path="*" element={ <Error />  }/>
        </Routes>
      </Router>
    </div>
  );

};

export default ReactRouterSetup;
