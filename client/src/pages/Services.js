import React from 'react';
import {Link, useParams} from 'react-router-dom';
import useCategories from '../hooks/useCategories.js'

export default function Services() {
  const { id } = useParams();
  const { state } = useCategories();
  
  const services = !state.categories[id - 1] ? "" : state.categories[id - 1].services.map(service => {
    return (
      <li key={service.service_id} >
        {service.service}
        <br></br>
        {service.service_description}
        <br></br>
        <Link to={`${id}/services/${service.service_id}`}>
        <img src={service.service_thumbnail} alt={service.service}/>
        </Link>
        <br></br>
        <br></br>
      </li>
  )});

  return (
    <div className="App" >
      <h2> Select a Service</h2>
      {!state.categories[id - 1] ? "" : state.categories[id - 1].category}
      <ul> {services} </ul>
    </div >
  );
}