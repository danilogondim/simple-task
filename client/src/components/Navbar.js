import React, {useContext} from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
//import NavButton from './NavButton';
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js"

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
    <nav>

      <div className="logo">
        SimpleTask
      </div>

      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to='/search'>Search</Link></li>

        {(token.length > 0) ? 
        <>
        <li><Link onClick={handleLogout}>Logout</Link></li>
        <li><Link to='/users/:id'>Become a member</Link></li>
        </>
        :
        <>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        </>
        }

      </ul>

    </nav>
  );
}