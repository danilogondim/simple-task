import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import logo from './logo.svg';
import './App.css';
// import useApplicationData from './hooks/useApplicationData'

import Navbar from './components/Navbar';

import Home                 from './pages/Home';
import About                from './pages/About';
import Users                from './pages/Users';
import Login                from './pages/Login';
import Register             from './pages/Register';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">        <Home/>         </Route>
          <Route path="/about">         <About/>        </Route>
          <Route path="/login">         <Login/>        </Route>
          <Route path="/Register">      <Register/>     </Route>
          <Route path="/users">         <Users/>        </Route>
        </Switch>
      </div>
    </Router>
  );
}
