import React, { useState } from 'react';
import useTaskersData from '../hooks/useTaskersData.js'
import MapView from '../components/MapView';

//import useCategories from '../hooks/useCategories.js'




export default function Search() {

  const [myLocation, setMyLocation] = useState(JSON.parse(localStorage.getItem('location')));
  const [value, setValue] = useState('1');
  //console.log('value----------->', value)


  navigator.geolocation.getCurrentPosition((data) => {
    const {latitude: lat, longitude: lng} = data.coords
    localStorage.setItem('location', JSON.stringify({lat, lng}))
    let location = localStorage.getItem('location');
    //console.log('location------->', location);
    setMyLocation(JSON.parse(location))
    //setMyLocation({lat, lng})
  })

  
  //render users
  const { state } = useTaskersData(value);
  const users = state.taskers.map(user => {
    return (
      <li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  )});


  //renders categories
  // const { state } = useCategories();
  // const categories = state2.categories.map(user => {
  //   return (
  //     <li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  // )});


      

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
 
