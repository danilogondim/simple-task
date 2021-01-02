import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap'
import "./Home.scss";

export default function User() {
  return (
    <div>
      <Container className="p-3">
        <Jumbotron className=" p-3 mb-2 jumbotron">
          <h1 className="header">Profile</h1>
        </Jumbotron>
      </Container>
    </div>
  );
}