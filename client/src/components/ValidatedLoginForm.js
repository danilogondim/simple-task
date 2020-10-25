import React from 'react';
import './Registration.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import './ValidatedLoginForm.scss'



export default function ValidatedLoginForm() {


  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (user) => {

    console.log(user);

    axios
    .post('/api/users/authenticate/', user)
    .then( (res) => console.log(res)
    
    )
    .catch(err => {
      console.error(err);
    });


  }


  return (
    <div>
      <h1>Login</h1>

      <form className='Login-form' onSubmit={handleSubmit(onSubmit)}>

        <label htmlFor="email">Email: </label>
        <input name="email" type="text" placeholder="Enter your email"
        ref={register({ required: true})} />
        {errors.email && <p> This is a mandatory field. </p>}

        <label htmlFor="password">Password: </label>
        <input name="password" type="password" placeholder="Enter your password" ref={register({ required: true, minLength: 6})}  />
        {errors.password && errors.password.type === "required" && <p> This is a mandatory field. </p>}
        {errors.password && errors.password.type === "minLength" && <p> Password must have at least 6 characters. </p>}

         <button type="submit">
           Login
         </button>

      </form>


     </div>
  );
}
