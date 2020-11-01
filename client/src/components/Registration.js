import React, { useContext } from 'react';
import './Registration.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js"




export default function Registration() {

  const {setToken} = useContext(AppContext);
  const history = useHistory();
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async(user) => {

    let address = `${user.number} ${user.street}, ${user.city}`;
    let newAddress = address.split(' ').join('+');

    try {
      const response = await axios.get(`${window.location.protocol}//nominatim.openstreetmap.org/search?format=json&q='+${newAddress}`);
      user.coordinates = [response.data[0].lat, response.data[0].lon]
    } catch (error) {
      console.log(error)
    }
  
    try {
      const response = await axios.post('/api/users/', user);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setToken(response.data.token);
      if(localStorage.getItem('task')) {
        history.push("/tasks/new")
      } else {
        history.push("/")
      }
    } catch (error) {
      console.log(error)
    }
  
  }


  return (
    <div>
      <h1>Registration</h1>  
      <hr />
        <form className='Registration-form' onSubmit={handleSubmit(onSubmit)}>
          
          <label>First Name:</label>
          <input type="text" name="first_name" ref={register({ required: true})} />
          {errors.first_name && <p> This is a mandatory field. </p>}
        
          <label>Last Name:</label>
          <input type="text" name="last_name" ref={register({ required: true})}  />
          {errors.last_name && <p> This is a mandatory field. </p>}
         
          <label>Phone:</label>
          <input type="tel" name="phone" ref={register({ required: true})}  />          
          {errors.phone && <p> This is a mandatory field. </p>}

          <label>Email:</label>
          <input type="email" name="email" ref={register({ required: true})}  />
          {errors.email && <p> This is a mandatory field. </p>}

          <label>Password:</label>
          <input type="password" name="password" ref={register({ required: true, minLength: 6})}  />
          {errors.password && errors.password.type === "required" && <p> This is a mandatory field. </p>}
          {errors.password && errors.password.type === "minLength" && <p> Password must have at least 6 characters. </p>}

          <label>Confirm Password:</label>
          <input type="password" name="check_password" ref={register({ validate: (value) => value === watch('password') })}  />
          {errors.check_password && <p> Password and Check Password must match </p>}

          <label>Number:</label>
          <input type="text" name="number" ref={register({ required: true})}  />
          {errors.number && <p> This is a mandatory field. </p>}

          <label>Street:</label>
          <input type="text" name="street" ref={register({ required: true})}  />
          {errors.street && <p> This is a mandatory field. </p>}

          <label>Unit:</label>
          <input type="text" name="unit" ref={register({ required: false})} />

          <label>City:</label>
          <input type="text" name="city" ref={register({ required: true})}  />
          {errors.city && <p> This is a mandatory field. </p>}

          <label>Photo:</label>
          <input type="text" name="photo_url" ref={register({ required: false})}  />

          <input type="submit" name="submit_register" className="LoginRegister_btn"/>
        </form>
      <p className='Become_tasker'>*Are you looking to become a tasker? Make an account as an user and upgrade it for free after.</p>
    </div>
  );
}



