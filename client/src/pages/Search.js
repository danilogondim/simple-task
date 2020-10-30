import React, { useState } from 'react';
import useTaskersData from '../hooks/useTaskersData.js'
import MapView from '../components/MapView';




export default function Search() {

  const [myLocation, setMyLocation] = useState(JSON.parse(localStorage.getItem('location')));

  const [value, setValue] = useState('1');

  console.log('value----------->', value)

  navigator.geolocation.getCurrentPosition((data) => {

    const {latitude: lat, longitude: lng} = data.coords

    

    localStorage.setItem('location', JSON.stringify({lat, lng}))

    let location = localStorage.getItem('location');

    //console.log('location------->', location);

    setMyLocation(JSON.parse(location))

    
    // const cnTower = {latitude: 43.644300, longitude: -79.386886};
    // setMyLocation(cnTower)
    
   

    //setMyLocation({lat, lng})
  })

  






  //render users

  const { state } = useTaskersData(1);
  
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
         <select value={value} onChange={event => setValue(event.target.value)} name = "dropdown_categories">
            <option value = "1">Pets</option>
            <option value = "2">House</option>
            <option value = "3">Garden</option>
            <option value = "4">Food</option>
         </select>
      </form>
      {myLocation &&
      
        <div className="App">
          <MapView
          myLocation = {myLocation}
          taskers = {state.taskers}
          />
        </div>
      }

      </>

    )
}
 
