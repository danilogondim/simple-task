import React from 'react';
// import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import useTaskers from '../hooks/useTaskers'

export default function Service() {
  const { id } = useParams();
  const { state } = useTaskers(id);
  return (
    <div>
      <h1>Categories ➟ Category ➟ Services ➟ Service ➟ taskers</h1>
      <h1>{id}</h1>
    </div>
  );
}