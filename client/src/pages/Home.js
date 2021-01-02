import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Card } from 'react-bootstrap'
import useCategories from '../hooks/useCategories.js'
import "./Home.scss";


export default function Home() {
  const { state } = useCategories();
  const renderCard = ((card) => {
    return (
      <Card style={{ width: "18rem" }} key={card.category_id} className="box">
        <Link to={`categories/${card.category_id}`}>
          <Card.Img variant="top" src={card.category_thumbnail} />
        </Link>
        <Card.Body>
          <Card.Title>{card.category}</Card.Title>
          <Card.Text className="align-middle">{card.category_description}</Card.Text>
        </Card.Body>
      </Card>
    )
  });

  return (
    <div className="App">
      <Container className="p-3">
        <Jumbotron className="p-3 mb-2 jumbotron">
          <h1 className="header">Welcome To SimpleTask</h1>
          <h4>Select a category to begin with</h4>
        </Jumbotron>
        <div className="grid">{state.categories.map(renderCard)}</div>
      </Container>
      <br />
    </div>
  );
}