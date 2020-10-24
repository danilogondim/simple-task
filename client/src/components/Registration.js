import React from 'react';
import './Registration.scss';

export default function Registration() {

    // for later use <form onSubmit={handleSubmit}>

  return (
    <div>
      <h1>Registration</h1>  

      <hr />


      <h2>User: </h2>
        <form>
          <label>First Name*:</label>
          <input type="text" name="first_name" id="first_name" /><br />
          <label>Last Name*:</label>
          <input type="text" name="last_name" id="last_name" /><br />
          <label>Phone*:</label>
          <input type="number" name="phone" id="phone" /><br />
          <label>Email*:</label>
          <input type="text" name="email" id="email" /><br />
          <label>Password*:</label>
          <input type="password" name="password" id="password" /><br />
          <label>Confirm Password*:</label>
          <input type="password" name="confirm_password" id="confirm_password" /><br />
          <label>Address*:</label>
          <input type="text" name="address" id="address" /><br />
          <label>Photo:</label>
          <input type="text" name="photo" id="photo" /><br />
          <input type="submit" value="Register" />
        </form>

    



    </div>
  );
}



