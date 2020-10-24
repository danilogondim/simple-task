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
import Login                from './pages/Login';
import Register             from './pages/Register';
import Users                from './pages/Users';
import User                 from './pages/User';
import Services             from './pages/Services';
import Service              from './pages/Service';
import Tasks_new            from './pages/Tasks_new';

export default function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">                           <Home/>          </Route>
          <Route path="/about">                            <About/>         </Route>
          <Route path="/login">                            <Login/>         </Route>
          <Route path="/register">                         <Register/>      </Route>
          <Route exact path="/users">                      <Users/>         </Route>
          <Route path="/users/:id">                        <User/>          </Route>
          <Route exact path="/categories/:id/services">    <Services/>      </Route>
          <Route path="/categories/:id/services/:id">      <Service/>       </Route>
          <Route path="/tasks/new">                        <Tasks_new/>     </Route>
        </Switch>
      </div>
    </Router>
  );
}
