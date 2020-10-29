import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
//import NavButton from './NavButton';
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js"
// import HomeIcon from '@material-ui/icons/Home';

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
      
      <Link to="/" className="logo nav-link">
        <span>Simple</span><span>Task</span>
      </Link>

      <ul className="nav">
        <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link> </li>
        <li className="nav-item"><Link className="nav-link" to='/search'>Search</Link></li>

        {(token.length > 0) ? 
        <>
        <li className="nav-item"><Link className="nav-link" onClick={handleLogout}>Logout</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/users/:id'>Profile</Link></li>
        </>
        :
        <>
        <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>
        <li className="nav-item"><Link className="nav-link" to='/register'>Register</Link></li>
        </>
        }
      </ul>
      
    </nav>
  );
}