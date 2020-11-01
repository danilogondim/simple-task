import React from 'react';
import {Popup} from 'react-leaflet';
import { Rating } from '@material-ui/lab';
// import { useHistory } from "react-router-dom";

const MarkerPopup = (props) => {

  // const history = useHistory();

  // const handleClick = () => {
  //   history.push("/")
  //   ///categories/category_id/services/service_id
  // }

  const { first_name, photo_url, average_rating } = props.data;

  return  (<Popup>
    <img src={photo_url} alt="photo_url" width="100%" height="100%"/>
    <p>{first_name}</p>

      <div className="rating">
        {average_rating === null && <p>New Tasker!</p>}
        {average_rating !== null &&
         <>
            <Rating
            name="half-rating-read"
            defaultValue={Number(Number(average_rating).toFixed(2))}
            precision={0.1}
            readOnly
            className="rating-result"
            />
          </> 
        }
     </div>


  </Popup>);
};

export default MarkerPopup;