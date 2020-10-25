import React from 'react';
// import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";
import useTaskers from '../hooks/useTaskers'
import Filter from '../components/Filter'

export default function Service() {
  const { id } = useParams();
  const { state } = useTaskers(id);
  const taskers = !state.taskers ? "" : state.taskers.map(tasker => {
    return (
      <li key={tasker.id} >
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
    <>
      <Filter />
      <section className="taskers">
        <h4 className="taskers__header text--light">Select a Tasker</h4>
        <ul className="taskers__list">
          {taskers}
        </ul>
      </section>
    </>
  );
}