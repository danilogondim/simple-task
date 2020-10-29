import React, { useState } from 'react';
import useTaskersData from '../hooks/useTaskersData.js'
import MapView from '../components/MapView';




export default function Search() {

  const [myLocation, setMyLocation] = useState()

  navigator.geolocation.getCurrentPosition((data) => {

    const {latitude: lat, longitude: lng} = data.coords
   
    setMyLocation({lat, lng})
  })

  //render users
  const { state } = useTaskersData();
  const users = state.taskers.map(user => {
    return (
      <li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  )});


  
    return (
          
      <>
      <p>RENDER MAP HERE</p>
      <div className="App" >
      <h2> Taskers </h2>
      <ul> {users} </ul>
      </div>

      <div className="App">
      <MapView
      myLocation = {myLocation}
      />
      </div>

      </>

    )
}
 
