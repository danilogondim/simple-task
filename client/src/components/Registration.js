import React, { useContext } from 'react';
import './Registration.scss';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { AppContext } from "../App.js"
import Geocode from "react-geocode";

//Google Geocode Setup
const API_KEY = process.env.REACT_APP_GOOGLE_API;
Geocode.setApiKey(API_KEY);
Geocode.setLanguage("en");
Geocode.setRegion("ca");
Geocode.enableDebug();


export default function Registration() {

  const {setToken} = useContext(AppContext);

  let history = useHistory();


  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (user) => {

    //console.log(user);
    
    let address = `${user.number} ${user.street}, ${user.city}`;

    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        user.coordinates = [lat, lng];
        //console.log('user.coordinates------>', user.coordinates);


        axios
        .post('/api/users/', user)
        .then((info) => {
          //console.log('info.data---------------->', info.data)
          localStorage.setItem('token', info.data);
          setToken(info.data);
          history.push("/");
        }
        )
        .catch(err => {
          console.error(err);
        });





      },
      error => {
        console.error(error);
      }
    );

   




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

          <label>Number:</label>
          <input type="text" name="number" ref={register({ required: true})}  /><br />
          {errors.address && <p> This is a mandatory field. </p>}


          <label>Street:</label>
          <input type="text" name="street" ref={register({ required: true})}  /><br />
          {errors.address && <p> This is a mandatory field. </p>}

          <label>Unit:</label>
          <input type="text" name="unit" ref={register({ required: false})} /><br />

          <label>City:</label>
          <input type="text" name="city" ref={register({ required: true})}  /><br />
          {errors.address && <p> This is a mandatory field. </p>}

          <label>Photo:</label>
          <input type="text" name="photo_url" ref={register({ required: false})}  /><br />

          <input type="submit" name="submit_register" />
        </form>

      <p>Are you looking to become a tasker? Make an account as an user and upgrade it for free after.</p>

    



    </div>
  );
}



