import React, { useState } from 'react';
import useTaskersData from '../hooks/useTaskersData.js'
import MapView from '../components/MapView';
import useCategories from '../hooks/useCategories.js'
import Dropbox from '../components/Dropbox.js'




export default function Search() {

  const [myLocation, setMyLocation] = useState(JSON.parse(localStorage.getItem('location')));
  const [selectedCategory, setSelectedCategory] = useState('1');
  const [selectedService, setSelectedService] = useState('1');


 



  navigator.geolocation.getCurrentPosition((data) => {
    const {latitude: lat, longitude: lng} = data.coords
    localStorage.setItem('location', JSON.stringify({lat, lng}))
    let location = localStorage.getItem('location');
    //console.log('location------->', location);
    setMyLocation(JSON.parse(location))
    //setMyLocation({lat, lng})
  })

  
  //render users
  const { state } = useTaskersData(selectedService);

  //const { state } = useTaskersData(selectedCategory, selectedService);



  //renders categories
  const result = useCategories().state;

  //console.log ('result------->', result);


  const findServices = () => {

    
    //console.log(result.categories)
    const indexOfCategory = result.categories.findIndex( (category) => category.category_id.toString() === selectedCategory )
    
    const category = {...result.categories[indexOfCategory] }

 
    const services = category.services?.map((service) => ({
      category: service.service,
      category_id: service.service_id
    }))

    //console.log("aqui:", services);
    return services

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
 
