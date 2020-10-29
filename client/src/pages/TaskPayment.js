import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap'
import useTaskPaymentData from '../hooks/useTaskPaymentData.js'
import "./Home.scss";
import "./TaskPayment.scss"

export default function TaskPayment() {
  const { state } = useTaskPaymentData();
  const task = state.taskPayment
  return (
    <div className="App" >
    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 jumbotron">
      <h1 className="header">Payment</h1>
    </Jumbotron>
    <table class="table table-dark">
      <thead>
        <tr>
          <th colspan="2" scope="col">Payment Info</th>
        </tr>
      </thead>
      <tbody class="text-left">
        <tr>
          <td>Task ID</td>
          <td>{task.task_id}</td>
        </tr>
        <tr>
          <td className="text-wrap">Task</td>
          <td>{task.task}</td>
        </tr>
        <tr>
          <td>Tasker</td>
          <td>{task.first_name} {task.last_name}</td>
        </tr>
        <tr>
          <td>Hourly Rate</td>
          <td>${task.hourly_rate/100}.00</td>
        </tr>
        <tr>
          <td>Start Time</td>
          <td>{task.start_time}</td>
        </tr>
        <tr>
          <td>End Time</td>
          <td>{task.end_time}</td>
        </tr>
        <tr>
          <td>Total Time</td>
          <td>{task.total_time} Hours</td>
        </tr>
      </tbody>
    </table>
    </Container>
    </div >
  );
}