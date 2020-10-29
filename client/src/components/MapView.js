  
import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

class MapView extends Component {
  
 

  render() {

    return (
      <Map center={this.props.myLocation} zoom={12}  style = {{  width: "100vw",  height: "100vh" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues}/>
      </Map>
    );
  }
}

export default MapView;