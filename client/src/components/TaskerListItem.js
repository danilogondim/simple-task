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
        {first_name + ' ' + last_name}
        <br></br>
        {coordinates}
        <br></br>
        <img src={photo_url} alt={first_name + " " + last_name} />
        <br></br>
        {'vehicle: ' + vehicle}
        <br></br>
        {'hourly_rate: $' + (hourly_rate / 100).toFixed(2)}
        <br></br>
        {'user_rating: ' + Number(user_rating).toFixed(2)}
        <br></br>
        <br></br>
      </li>
    </article >
  );
};