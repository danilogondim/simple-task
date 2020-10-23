import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>

      <div>
        SimpleTask
      </div>

      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to='/search'>Search</Link></li>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
      </ul>

    </nav>
  );
}