import React from 'react';
import {Popup} from 'react-leaflet';

const MarkerPopup = (props) => {



  const { first_name, photo_url } = props.data;

  return  (<Popup>
    <img src={photo_url} alt="photo_url" width="100%" height="100%"/>
    <div className='poup-text'>{first_name}</div>

  </Popup>);
};

export default MarkerPopup;