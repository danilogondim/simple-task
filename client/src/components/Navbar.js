import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import NavButton from './NavButton';
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js"
import Avatar from '@material-ui/core/Avatar';
// import HomeIcon from '@material-ui/icons/Home';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

import './Navbar.scss';

//Get a token for the first time on the file
//let token = localStorage.getItem('token');

//Get a token if it already exists
//let token = localStorage.setItem('token');


export default function Navbar() {

  const { token, setToken } = useContext(AppContext);

  let history = useHistory();
  const user = JSON.parse(localStorage.getItem("user"));

  // console.log('!!token------------>', !!token)
  // console.log('token------------>', token)

  function handleLogout(event) {
    event.preventDefault();
    localStorage.clear();
    setToken();
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
        <li className="nav-item"><Link className="nav-link" to='/search'>Map<RoomOutlinedIcon/></Link></li>

        {token ?
          <>
            <li className="nav-item"><Link className="nav-link" to='/' onClick={event => handleLogout(event)}>Logout</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/users/:id'>{!user.photo_url ? `Hello, ${user.first_name}!` : <Avatar alt={user.first_name}
              src={user.photo_url} />}</Link></li>
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