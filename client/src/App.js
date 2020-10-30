import React, { createContext, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css';

import Navbar               from './components/Navbar';

import Home                 from './pages/Home';
import About                from './pages/About';
import Login                from './pages/Login';
import Register             from './pages/Register';
import Users                from './pages/Users';
import User                 from './pages/User';
import Services             from './pages/Services';
import Service              from './pages/Service';
import TasksNew             from './pages/TasksNew';
import Task                 from './pages/Task';
import TaskComplete         from './pages/TaskComplete';
import TaskPayment          from './pages/TaskPayment';
import Search               from './pages/Search';
import ChatBox from './components/ChatBox';


const AppContext = createContext();

export default function App() {

  const [token, setToken] = React.useState([])

  useEffect(() => {
    const socket = new WebSocket(process.env.REACT_APP_WEBSOCKET_URL);
    socket.onmessage = event => {
      const data = JSON.parse(event.data);
    
      console.log("new data: ", data);
    };

    socket.onopen = function (event) {
      socket.send("ping"); 
    };
  },[])

  return (
    <AppContext.Provider value={{token, setToken}}>
    <Router>
      <div>
        <Navbar/>
        <ChatBox/>
        <Switch>
          <Route exact path="/">                           <Home/>            </Route>
          <Route path="/about">                            <About/>           </Route>
          <Route path="/login">                            <Login/>           </Route>
          <Route path="/register">                         <Register/>        </Route>
          <Route exact path="/users">                      <Users/>           </Route>
          <Route path="/users/:id">                        <User/>            </Route>
          <Route exact path="/categories/:id">             <Services/>        </Route>
          <Route path="/categories/:c_id/services/:id">    <Service />        </Route>
          <Route path="/tasks/new">                        <TasksNew/>        </Route>
          <Route exact path="/tasks/:id">                  <Task/>            </Route>
          <Route path="/tasks/:id/complete">               <TaskComplete/>    </Route>
          <Route path="/tasks/:id/payment">                <TaskPayment/>     </Route>
          <Route path="/search">                           <Search/>          </Route>
        </Switch>
      </div>
    </Router>
    </AppContext.Provider>
  );
};

export {AppContext}; 