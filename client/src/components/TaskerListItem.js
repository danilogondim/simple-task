import React from 'react';

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
        {first_name}
        <br></br>
        {last_name}
        <br></br>
        {coordinates}
        <br></br>
        <img src={photo_url} alt={first_name + " " + last_name} />
        <br></br>
        {vehicle}
        <br></br>
        {hourly_rate}
        <br></br>
        {user_rating}
        <br></br>
        <br></br>
      </li>
    </article >
  );
};