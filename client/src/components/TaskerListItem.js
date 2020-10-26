import React from 'react';
import { Rating } from '@material-ui/lab';
import './TaskerListItem.scss'

export default function TaskerListItem(props) {
  const { id,
    first_name,
    last_name,
    // phone,
    // address,
    coordinates,
    // email,
    photo_url,
    vehicle,
    hourly_rate,
    user_rating
  } = props.tasker;
  return (
    <article className='tasker'>
      <li key={id} >
        {first_name + ' ' + last_name}
        <br></br>
        <img src={photo_url} alt={first_name + " " + last_name} />
        <br></br>
        {user_rating === null && <p>New Tasker!</p>}
        {user_rating !== null &&
          <>
            <Rating
              name="half-rating-read"
              defaultValue={Number(user_rating).toFixed(2)}
              precision={0.5}
              readOnly
              className="rating"
            />
            <br></br>
          </>}
        {'Hourly rate: $' + (hourly_rate / 100).toFixed(2)}
        <br></br>
        {'Vehicle: ' + vehicle}
        <br></br>
        <br></br>
      </li>
    </article >
  );
};