import React, { Fragment } from 'react'
import {Marker} from 'react-leaflet';
import {VenueLocationIcon} from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

const VenueMarkers = (props) => {

  //console.log(props.venues[0]);




  const markers = props.venues.map((venue) => {
    const { id, coordinates } = venue;
    const [ lat, lng ] = coordinates;

    const location = {
      lat: Number(lat),
      lng: Number(lng)
    }

    console.log('Props.venues---------->', props.venues);
    

    return (
    <Marker key={id} position={location} icon={VenueLocationIcon} >
      <MarkerPopup data={venue}/>
    </Marker>
  )});

  return <Fragment>{markers}</Fragment>
};

export default VenueMarkers;