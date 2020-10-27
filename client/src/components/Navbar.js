import React, {useContext} from 'react';
// import {Link} from 'react-router-dom';
//import NavButton from './NavButton';
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js"

import './Navbar.scss';

//Get a token for the first time on the file
//let token = localStorage.getItem('token');

//Get a token if it already exists
//let token = localStorage.setItem('token');


export default function Navbar() {

  const {token, setToken} = useContext(AppContext);

  let history = useHistory();

  // console.log('!!token------------>', !!token)
  // console.log('token------------>', token)

  function handleLogout() {
    localStorage.clear();
    setToken([]);
    history.push('/login');
  }
  
  return (
    <nav className="navbar sticky-top">
      
      <a href="/" className="logo nav-link">
        <span>Simple</span><span>Task</span>
      </a>

      {/* <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to='/search'>Search</Link></li>

        {(token.length > 0) ? 
        <>
        <li><Link onClick={handleLogout}>Logout</Link></li>
        <li><Link to='/users/:id'>Profile</Link></li>
        </>
        :
        <>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        </>
        }

      </ul> */}

      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About</a>
        </li>
        {(token.length > 0) ? 
        <>
        <li className="nav-item">
          <a className="nav-link" href='/#' onClick={handleLogout}>Logout</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/users/:id'>Profile</a>
        </li>
        </>
        :
        <>
        <li className="nav-item">
          <a className="nav-link" href='/login'>Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/register'>Register</a>
        </li>
        </>
        }
      </ul>

    </nav>
  );
}