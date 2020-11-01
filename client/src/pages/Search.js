import React, { useState } from 'react';
import useTaskersData from '../hooks/useTaskersData.js'
import MapView from '../components/MapView';
import useCategories from '../hooks/useCategories.js'
import Dropbox from '../components/Dropbox.js'
import { useHistory } from "react-router-dom";


export default function Search() {

  const history = useHistory();
  const [myLocation, setMyLocation] = useState(JSON.parse(localStorage.getItem('location')));
  const [selectedCategory, setSelectedCategory] = useState('0');
  const [selectedService, setSelectedService] = useState('0');

  navigator.geolocation.getCurrentPosition((data) => {
    const {latitude: lat, longitude: lng} = data.coords
    localStorage.setItem('location', JSON.stringify({lat, lng}))
    let location = localStorage.getItem('location');
    setMyLocation(JSON.parse(location))
  })
  
  //render users
  const { state } = useTaskersData(selectedService)

  //renders categories
  const result = useCategories().state;

  const findServices = () => {
    const indexOfCategory = result.categories.findIndex( (category) => category.category_id.toString() === selectedCategory )
    const category = {...result.categories[indexOfCategory] }
    const services = category.services?.map((service) => ({
      category: service.service,
      category_id: service.service_id
    }))
    return services
  }

  const handleClick = () => {
    history.push(`/categories/${selectedCategory}/services/${selectedService}`)
  }

  return (  
    <>
      <Dropbox 
        title = 'Categories:'
        value = {selectedCategory}
        setValue = {setSelectedCategory}
        categories = {result.categories}
      />

      <Dropbox 
        title = 'Services:'
        value = {selectedService}
        setValue = {setSelectedService}
        categories = {findServices()}
      />
    
      <div className="">
      {selectedService==='0'? null:
      <button className="Conditional_button" onClick={handleClick}>
      Go to service page!
      </button>}
      </div>

      <hr/>

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
 
