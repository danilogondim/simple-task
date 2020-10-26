import React from 'react';
import {Link} from 'react-router-dom';
import useCategories from '../hooks/useCategories.js'
import { Jumbotron, Container, Toast, Card, Row, Col, CardColumns } from 'react-bootstrap'

export default function Home() {
  const { state } = useCategories();
  const categories = state.categories.map(category => {
    return (
      <li key={category.category_id} >
          <CardColumns>
        {category.category}
        <br></br>
        {category.category_description}
        <br></br>
        <Link to={`categories/${category.category_id}`}>
        <img src={category.category_thumbnail} alt={category.category}/>
        </Link>
        <br></br>
        <br></br>
        </CardColumns>
      </li>
  )});

  // return (
  //   <div className="App" >
  //     <h2> Select a Category </h2>
  //     <ul> {categories} </ul>
  //   </div >
  // );

  // return (
  //   <div className="jumbotron">
  //     <h1 className="display-4">Hello, world!</h1>
  //     <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  //     <hr className="my-4"/>
  //     <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  //     <a className="btn btn-primary btn-lg" href="https://images.unsplash.com/photo-1522276498395-f4f68f7f8454?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" role="button">Learn more</a>
  //   </div>
  // );

  return (
    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 bg-info text-white">
      <h1 className="header">Welcome To SimpleTask</h1>
      <Toast className="bg-info text-white" >
        Please choose a category to start with
        <span role="img" aria-label="tada">
          🎉
        </span>
      </Toast>
    </Jumbotron>
    <div className="App" >
      <h2> Select a Category </h2>
      <ul className="p-3 mb-2 bg-dark text-white"> {categories} </ul>
    </div >
    </Container>
  
  );
}