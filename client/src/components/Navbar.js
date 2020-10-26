import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';
import NavButton from './NavButton';




export default function Navbar() {


  function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
    return [value, toggle];
  }

  const [initial, funcInitial] = useToggle('Login');
  const [initial2, funcInitial2] = useToggle('Register');


  return (
    <nav>

      <div>
        SimpleTask
      </div>

      <ul className="menu">
        <li><Link to='/'>Home</Link></li>
        <li><Link to="/about">About</Link> </li>
        <li><Link to='/search'>Search</Link></li>


        <NavButton onClick={funcInitial}>
        {initial ? 
        'Login'
        : 
        'Logout'
        } 
        </NavButton>

        <NavButton onClick={funcInitial2}>
        {initial2 ? 
        'Register' 
        : 
        'Become a Tasker'
        } 
        </NavButton>



      </ul>

    </nav>
  );
}