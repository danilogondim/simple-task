import React from 'react';
import './Registration.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function Registration() {

  let history = useHistory();


  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (user) => {

    // console.log(user);

    axios
    .post('/api/users/', user)
    .then(() => {

      

      history.push("/");
    }
      //(user) => console.log(user.data)
    )

    .catch(err => {
      console.error(err);
    });


  }


  return (
    <div>
      <h1>Registration</h1>  

      <hr />


      <h2>User: </h2>
        <form className='Registration-form' onSubmit={handleSubmit(onSubmit)}>
          
          <label>First Name:</label>
          <input type="text" name="first_name" ref={register({ required: true})} />
          {errors.first_name && <p> This is a mandatory field. </p>}
          <br />
          

          <label>Last Name:</label>
          <input type="text" name="last_name" ref={register({ required: true})}  />
          {errors.last_name && <p> This is a mandatory field. </p>}
          <br />
         

          <label>Phone:</label>
          <input type="tel" name="phone" ref={register({ required: true})}  />          
          {errors.phone && <p> This is a mandatory field. </p>}
          <br />

          <label>Email:</label>
          <input type="email" name="email" ref={register({ required: true})}  />
          {errors.email && <p> This is a mandatory field. </p>}
          <br />

          <label>Password:</label>
          <input type="password" name="password" ref={register({ required: true, minLength: 6})}  /><br />
          {errors.password && errors.password.type === "required" && <p> This is a mandatory field. </p>}
          {errors.password && errors.password.type === "minLength" && <p> Password must have at least 6 characters. </p>}


          <label>Address:</label>
          <input type="text" name="address" ref={register({ required: true})}  /><br />
          {errors.address && <p> This is a mandatory field. </p>}

          <label>Photo:</label>
          <input type="text" name="photo_url" ref={register({ required: false})}  /><br />

          <input type="submit" name="submit_register" />
        </form>

      <p>Are you looking to become a tasker? Make an account as an user and upgrade it for free after.</p>

    



    </div>
  );
}



