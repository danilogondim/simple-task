import React from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Container, Card } from 'react-bootstrap'
import useCategories from '../hooks/useCategories.js'
import "./Home.scss";

export default function Home() {
  const { state } = useCategories();
  const renderCard = ((card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index} className="box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.category_thumbnail} />
        <Card.Body>
          <Card.Title>{card.category}</Card.Title>
          <Card.Text className="align-middle">{card.category_description}</Card.Text>
        </Card.Body>
        <Link to={`categories/${card.category_id}`}>
          <button className="btn btn-info btn-block">Select</button>
        </Link>
      </Card>
  )});

  return (
    <div className="App" >
    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 bg-info text-white">
      <h1 className="header">Welcome To SimpleTask</h1>
      <br></br>
      <h4>Select a category to begin with</h4>
    </Jumbotron>
      <div className="grid">{state.categories.map(renderCard)}</div>
    </Container>
    </div >
  );
}