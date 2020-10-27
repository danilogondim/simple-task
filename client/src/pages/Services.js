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
        <Link to={`${id}/services/${card.service_id}`}>
        <Card.Img variant="top" src={card.service_thumbnail} />
        </Link>
        <Card.Body>
          <Card.Title>{card.service}</Card.Title>
          <Card.Text className="align-middle">{card.service_description}</Card.Text>
        </Card.Body>
      </Card>
  )});

  return (
    <div className="App" >
    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 jumbotron">
      <h3 className="header">Select a Service</h3>
    </Jumbotron>
      <div className="grid">{!state.categories[id - 1] ? "" : state.categories[id - 1].services.map(renderCard)}</div>
    </Container>
    </div >
  );
}