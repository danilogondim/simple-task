import React from 'react';
import useTaskData from '../hooks/useTaskData';

export default function Task() {

  const { state, dispatch } = useTaskData();

  console.log(state);

  return (
    <div>
      <h1>Tasks ➟ Task </h1>
    </div>
  );
}