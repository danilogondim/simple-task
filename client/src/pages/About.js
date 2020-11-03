import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap'
import './About.scss';

export default function About() {
  return (
    <div>

    <Container className="p-3">
    <Jumbotron className=" p-3 mb-2 jumbotron">
     <h1 className="header">About Us</h1>  
    </Jumbotron>
      
      <p className="AboutDescription">SimpleTask looks for connecting users and taskers (users offering their services) quickly and dynamically. The application was developed by Danilo Gondim, Ricardo Barbosa and Vinay Baswa over 10 days, and it provides many features to its customers.</p>
      <p className="AboutDescription2">Users can look for professionals to be hired for fair prices. The search might be done browsing the website or by an interactive map. Furthermore, before booking a service, users are allowed to open a chat with possible taskers in order to asking questions. </p>
      <p className="AboutDescription2">Taskers can offer different sorts of services divided into more than 6 categories. From Information Technology to Pets, SimpleTask aims to add more categories soon. Besides, before closing the deal, taskers might offer discounts according to the scope of the service to be done.</p>
      <p className="AboutDescription2">If you are skeptical about the application propose, just give us a shot. Our successful business model seeks to link users and taskers. Both are evaluated according to their previous experiences, and you can check the reviews in advance before booking an appointment or accepting a service. It provides widespread features and, for your security, even the payment is made using our platform.</p>
      <p className="AboutDescription2">For more questions or further details, do not hesitate to contact us.</p>


    </Container>
    </div>
  );
}