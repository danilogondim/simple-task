import React, { createContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import useApplicationData from './hooks/useApplicationData';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import Navbar               from './components/Navbar';
import Footer               from './components/Footer';
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
import PaymentSuccess       from './pages/PaymentSuccess';
import Search               from './pages/Search';
import ChatBox              from './components/ChatBox';
import ScrollToTop          from './components/ScrollToTop';

const AppContext = createContext();

export default function App() {

  const { token, setToken, socket } = useApplicationData();

  return (
    <AppContext.Provider value={{ token, setToken }}>
      <Router>
        <ScrollToTop />
        <div>
          <Navbar />
          <AppContext.Consumer>
            {token => <ChatBox token={token} socket={socket} />}
          </AppContext.Consumer>
          <Switch>
            <Route exact path="/">                           <Home />            </Route>
            <Route path="/about">                            <About />           </Route>
            <Route path="/login">                            <Login />           </Route>
            <Route path="/register">                         <Register />        </Route>
            <Route exact path="/users">                      <Users />           </Route>
            <Route path="/users/:id">                        <User />            </Route>
            <Route exact path="/categories/:id">             <Services />        </Route>
            <Route path="/categories/:c_id/services/:id">    <Service socket={socket} /></Route>
            <Route path="/tasks/new">                        <TasksNew />        </Route>
            <Route exact path="/tasks/:id">                  <Task />            </Route>
            <Route path="/tasks/:id/complete">               <TaskComplete />    </Route>
            <Route exact path="/tasks/:id/payment">          <TaskPayment />     </Route>
            {/* <Route path="/tasks/:id/payment/stripe">         <Layout />          </Route> */}
            <Route path="/tasks/:id/payment/success">        <PaymentSuccess />  </Route>
            <Route path="/search">                           <Search />          </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
};

export { AppContext }; 