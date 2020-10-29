import React, { createContext }       from 'react';
// import {Elements}                     from '@stripe/react-stripe-js';
// import {loadStripe}                   from '@stripe/stripe-js';
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


const AppContext            = createContext();
// const stripePromise         = loadStripe('pk_test_JJ1eMdKN0Hp4UFJ6kWXWO4ix00jtXzq5XG');


export default function App() {

  const [token, setToken] = React.useState([])

  return (
    <AppContext.Provider value={{token, setToken}}>

    {/* <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements> */}

    <Router>
      <div>
        <Navbar/>
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