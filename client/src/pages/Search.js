import React, { useState } from 'react';
import useTaskersData from '../hooks/useTaskersData.js'
import MapView from '../components/MapView';
import useCategories from '../hooks/useCategories.js'
import Dropbox from '../components/Dropbox.js'




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
  const state2 = useCategories().state;
  const categories = state2.categories.map(category => {
  return (
      <li key={category.category_id} > {category.category} {category.service_id} {category.service} </li>
  )});

  



    return (
          
      <>

      <Dropbox 
        value = {value}
        setValue = {setValue}
      />

      
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
 
