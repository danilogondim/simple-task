import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap'
import useTaskPaymentData from '../hooks/useTaskPaymentData.js'
import "./Home.scss";
import "./TaskPayment.scss"

export default function TaskPayment() {
  const { state } = useTaskPaymentData();
  const task = state.taskPayment
  return (
    <div className="App">
    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 jumbotron">
      <h1 className="header">Payment</h1>
    </Jumbotron>
    <div className="payment table-responsive">
    <table className="table table-dark">
      <thead>
        <tr>
          <th colSpan="2" scope="col">Task Info</th>
        </tr>
      </thead>
      <tbody className="text-left">
        <tr>
          <td>Task ID</td>
          <td className="text-right">{task.task_id}</td>
        </tr>
        <tr>
          <td className="text-wrap">Task</td>
          <td className="text-right">{task.task}</td>
        </tr>
        <tr>
          <td>Tasker</td>
          <td className="text-right">{task.first_name} {task.last_name}</td>
        </tr>
        <tr>
          <td>Hourly Rate</td>
          <td className="text-right">${task.hourly_rate}</td>
        </tr>
        <tr>
          <td>Start Time</td>
          <td className="text-right">{task.start_time}</td>
        </tr>
        <tr>
          <td>End Time</td>
          <td className="text-right">{task.end_time}</td>
        </tr>
        <tr>
          <td>Total Time</td>
          <td className="text-right">{task.total_time} Hours</td>
        </tr>
      </tbody>
    </table>

    <table className="payment.table table table-dark">
      <thead>
        <tr>
          <th colSpan="2" scope="col">Payment Info</th>
        </tr>
      </thead>
      <tbody className="text-left">
        <tr>
          <td>Hourly Total</td>
          <td className="text-right">${(task.hourly_rate * task.total_time).toFixed(2)}</td>
        </tr>
        <tr>
          <td className="text-wrap">Discount</td>
          <td className="text-right">$0.00</td>
        </tr>
        <tr>
          <td>Service Charge</td>
          <td className="text-right">${((task.hourly_rate * task.total_time) * 0.10).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tax</td>
          <td className="text-right">${(((task.hourly_rate * task.total_time) + (task.hourly_rate * task.total_time) * 0.10) * 0.13).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Total Price</td>
          <td className="text-right">${((task.hourly_rate * task.total_time) * 1.23).toFixed(2)}</td>
        </tr>
        <tr>
          <td colSpan="2" className="text-center">Proceed to Pay</td>
        </tr>
        <tr>
          <td colSpan="2" className="text-center">
            <button type="button" className="btn btn-success">Submit</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    </Container>
    </div >
  );
}