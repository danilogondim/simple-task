import React from 'react';

export default function TasksNew() {
  const {
    // id,
    first_name,
    last_name,
    // phone,
    // address,
    // coordinates,
    // email,
    photo_url,
    summary,
    vehicle,
    hourly_rate,
    user_rating
  } = JSON.parse(localStorage.getItem('tasker'));

  console.log(first_name);

  return (
    <div>
      <h1>Tasks ➟ NewTask</h1>
    </div>
  );
}