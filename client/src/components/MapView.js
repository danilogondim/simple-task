import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import VenueMarkers from './VenueMarkers';
import "./MapView.scss";

class MapView extends Component {
  
  render() {
    return (
      <div className='map-style'>
      <Map 
        center={this.props.myLocation} 
        zoom={12} 
        // maxZoom={20}
        style = {{  width: "80vw",  height: "58vh" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <VenueMarkers venues={this.props.taskers}/>
      </Map>
      </div>
    );
  }
}

export default MapView;