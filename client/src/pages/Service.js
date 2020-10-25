import React from 'react';
// import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import useTaskers from '../hooks/useTaskers'

export default function Service() {
  const { id } = useParams();
  const { state } = useTaskers(id);
  const taskers = !state.taskers ? "" : state.taskers.map(tasker => {
    return (
      <li key={tasker.id} >
        {tasker.name}
        <br></br>
        {tasker.first_name}
        <br></br>
        {tasker.last_name}
        <br></br>
        {tasker.phone}
        <br></br>
        {tasker.address}
        <br></br>
        {tasker.coordinates}
        <br></br>
        {tasker.email}
        <br></br>
        <img src={tasker.photo_url} alt={tasker.first_name + " " + tasker.last_name} />
        <br></br>
        {tasker.vehicle}
        <br></br>
        {tasker.hourly_rate}
        <br></br>
        {tasker.user_rating}
        <br></br>
        {/* {tasker.availability} */}
        <br></br>
      </li>
    )
  })
  return (
    <div>
      <h2> Select a Tasker </h2>
      <ul> {taskers} </ul>
    </div>
  );
}