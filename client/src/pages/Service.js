import React from 'react';
import {
  useParams
} from "react-router-dom";

export default function Service() {
  const { c_id, id } = useParams();
  return (
    <div>
      <h1>Categories ➟ Category ➟ Services ➟ Service ➟ taskers</h1>
      <h1>{c_id}</h1>
      <h1>{id}</h1>
    </div>
  );
}