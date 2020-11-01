import React from 'react';
import {Popup} from 'react-leaflet';
import { useHistory } from "react-router-dom";

const MarkerPopup = (props) => {

  const history = useHistory();

  const handleClick = () => {
    history.push("/")
    ///categories/category_id/services/service_id
  }

  const { first_name, photo_url } = props.data;

  return  (<Popup>
    <img src={photo_url} alt="photo_url" width="100%" height="100%"/>
    <button className='poup-text' onClick={handleClick}>{first_name}</button>

  </Popup>);
};

export default MarkerPopup;