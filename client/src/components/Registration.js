import React from 'react';
import './Registration.scss';
import { useForm } from 'react-hook-form';

export default function Registration() {


  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }


  return (
    <div>
      <h1>Registration</h1>  

      <hr />


      <h2>User: </h2>
        <form className='Registration-form' onSubmit={handleSubmit(onSubmit)}>
          <label>First Name*:</label>
          <input type="text" name="first_name" ref={register({ required: true})} /><br />

          <label>Last Name*:</label>
          <input type="text" name="last_name" ref={register({ required: true})}  /><br />

          <label>Phone*:</label>
          <input type="tel" name="phone" ref={register({ required: true})}  /><br />

          <label>Email*:</label>
          <input type="email" name="email" ref={register({ required: true})}  /><br />

          <label>Password*:</label>
          <input type="password" name="password" ref={register({ required: true, minLength: 6})}  /><br />
          <label>Address*:</label>
          <input type="text" name="address" ref={register({ required: true})}  /><br />

          <label>Photo:</label>
          <input type="text" name="photo_url" ref={register({ required: false})}  /><br />
          
          <input type="submit" name="submit_register" />
        </form>

      <p>Are you looking to become a tasker? Make an account as an user and upgrade it for free after.</p>

    



    </div>
  );
}



