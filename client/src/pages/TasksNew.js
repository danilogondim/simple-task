import React from 'react';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import TaskerListItem from '../components/TaskerListItem';



export default function TasksNew() {

  const [progress, setProgress] = React.useState(10);

  const tasker = JSON.parse(localStorage.getItem('tasker'));
  console.log(tasker);
  return (
    <>
      <LinearProgressWithLabel value={progress} />
      <TaskerListItem tasker={tasker}/>
      <h1>Tasks ➟ NewTask</h1>
    </>
  );
}