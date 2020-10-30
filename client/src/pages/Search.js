import React, { useState } from 'react';
import useTaskersData from '../hooks/useTaskersData.js'
import MapView from '../components/MapView';




export default function Search() {

  const [myLocation, setMyLocation] = useState()

  navigator.geolocation.getCurrentPosition((data) => {

    const {latitude: lat, longitude: lng} = data.coords

    

    localStorage.setItem('location', JSON.stringify({lat, lng}))

    let location = localStorage.getItem('location');

    console.log('location------->', location);

    setMyLocation(JSON.parse(location))

    
    // const cnTower = {latitude: 43.644300, longitude: -79.386886};
    // setMyLocation(cnTower)
    
   

    //setMyLocation({lat, lng})
  })

  //render users
  const { state } = useTaskersData();
  const users = state.taskers.map(user => {
    return (
      <li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  )});

      //console.log(state);
  
    return (
          
      <>
      {/* <p>RENDER MAP HERE</p>
      <div className="App" >
      <h2> Taskers </h2>
      <ul> {users} </ul>
      </div> */}

      <form>
        <label> Categories:</label>
         <select name = "dropdown_categories">
            <option value = "Category 1" selected>Pets</option>
            <option value = "Category 2">House</option>
            <option value = "Category 3">Garden</option>
            <option value = "Category 4">Food</option>
         </select>
      </form>

      <div className="App">
      <MapView
      myLocation = {myLocation}
      taskers = {state.taskers}
      />
      </div>

      </>

    )
}
 
