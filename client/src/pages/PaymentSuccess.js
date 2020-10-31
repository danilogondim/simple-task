import React from 'react';
import {Link} from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap'
import "./Home.scss";

export default function PaymentSuccess() {

  return (
    <div className="App" >
    <Container className="p-3">
      <Jumbotron className="p-3 mb-2 jumbotron">
        <h4>Payment Successful</h4>
      </Jumbotron>
      <Link to={`/`}>
        <button type="button" className="btn btn-primary p-3">Back to Home</button>
      </Link>
    </Container>
    </div >
  );
}