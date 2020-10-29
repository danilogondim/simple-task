import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap'
import useTaskPaymentData from '../hooks/useTaskPaymentData.js'
import "./Home.scss";

export default function TaskPayment() {
  const { state } = useTaskPaymentData();
  const task = state.taskPayment
  return (
    <div className="App" >
    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 jumbotron">
      <h1 className="header">Payment</h1>
    </Jumbotron>
      <h4>Task ID: {task.task_id}</h4>
      <h4>Task: {task.task}</h4>
      <h4>Tasker Name: {task.tasker_name}</h4>
      <h4>Start Time: {task.start_time}</h4>
      <h4>End Time: {task.end_time}</h4>
      {/* <h4>Duration: {task.total_duration.minutes}</h4> */}
      <h4>Total Time: {task.total_time}</h4>
    </Container>
    </div >
  );
}