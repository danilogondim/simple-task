import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js"

import './Footer.scss';

export default function Footer() {

  return (
    <>
      <nav className="footer-bar">
         <p className="foot">Copyright © 2020 Simple Task. All Rights Reserved.</p>
      </nav>
    </>
  )
};