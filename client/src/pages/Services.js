import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { Jumbotron, Container, Card } from 'react-bootstrap'
import useCategories from '../hooks/useCategories.js'
import "./Home.scss";

export default function Services() {
  const { id } = useParams();
  const { state } = useCategories();

  const renderCard = ((card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.service_thumbnail} />
        <Card.Body>
          <Card.Title>{card.service}</Card.Title>
          <Card.Text className="align-middle">{card.service_description}</Card.Text>
        </Card.Body>
        <Link to={`${id}/services/${card.service_id}`}>
          <button className="btn btn-info btn-block">Select</button>
        </Link>
      </Card>
  )});

  return (
    <div className="App" >
    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 bg-info text-white">
      <h3 className="header">Select a Service</h3>
    </Jumbotron>
      <div className="grid">{!state.categories[id - 1] ? "" : state.categories[id - 1].services.map(renderCard)}</div>
    </Container>
    </div >
  );
  
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