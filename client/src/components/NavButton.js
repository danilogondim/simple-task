import React from "react";


export default function NavButton(props) {

   return (
    <button
      //className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}


// < Login /></Login>

// {document.cookies? <li><Link to='/login'>Logout</Link></li> : <li><Link to='/login'>Login</Link></li>}
// {document.cookies? <li><Link to='/login'>Become a Tasker</Link></li> : <li><Link to='/register'>Register</Link></li>}