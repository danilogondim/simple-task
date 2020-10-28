import React from 'react';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel'
export default function TasksNew() {
  const [progress, setProgress] = React.useState(10);

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

  return (
    <>
      <LinearProgressWithLabel value={progress} />
      <h1>Tasks ➟ NewTask</h1>
    </>
  );
}