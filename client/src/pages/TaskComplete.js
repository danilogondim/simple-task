import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'react-bootstrap';
import useTaskPaymentData from '../hooks/useTaskPaymentData';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";


import "./Home.scss";
import "./TaskPayment.scss";

export default function TaskComplete() {
  const { state } = useTaskPaymentData();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const start = !startTime ? "" : new Date(startTime);
  const end = !endTime ? "" : new Date(endTime);

  const task = state.taskPayment;
  const rate = (task.hourly_rate / 100).toFixed(2);
  const hourlyTotal = (rate * task.total_time);
  const serviceCharge = (hourlyTotal * 0.10).toFixed(2);
  // const tax = ((hourlyTotal + serviceCharge) * 0.13).toFixed(2); // => NaN I dont know why this does not work
  const tax = (((hourlyTotal) + (hourlyTotal) * 0.10) * 0.13).toFixed(2);
  const grandTotal = ((rate * task.total_time) * 1.23).toFixed(2);

  return (
    <div className="App">
      <Container className="p-3">
        <Jumbotron className="p-3 mb-2 jumbotron">
          <h1 className="header">Task Completion</h1>
        </Jumbotron>

        <div className="payment table-responsive">
          <table className="table">
            <thead className="thead-dark">
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
                <td className="text-right">${rate}</td>
              </tr>
              <tr>
                <td>Start Time</td>
                <td className="text-right">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TimePicker
                      clearable
                      ampm={false}
                      label="select time"
                      value={startTime}
                      onChange={setStartTime}
                    />
                  </MuiPickersUtilsProvider>
                </td>
              </tr>
              <tr>
                <td>End Time</td>
                <td className="text-right">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TimePicker
                      clearable
                      ampm={false}
                      label="select time"
                      value={endTime}
                      onChange={setEndTime}
                    />
                  </MuiPickersUtilsProvider>
                </td>
              </tr>
              <tr>
                <td>Total Time</td>
                <td className="text-right">{end && start ? end.getHours() - start.getHours() + (end.getMinutes() - start.getMinutes()) / 60 : "-"} Hours</td>
              </tr>
            </tbody>
          </table>

          <table className="payment.table table">
            <thead className="thead-dark">
              <tr>
                <th colSpan="2" scope="col">Payment Info</th>
              </tr>
            </thead>
            <tbody className="text-left">
              <tr>
                <td>Hourly Total</td>
                <td className="text-right">${hourlyTotal}</td>
              </tr>
              <tr>
                <td className="text-wrap">Discount</td>
                <td className="text-right">$0.00</td>
              </tr>
              <tr>
                <td>Service Charge</td>
                <td className="text-right">${serviceCharge}</td>
              </tr>
              <tr>
                <td>Tax</td>
                <td className="text-right">${tax}</td>
              </tr>
              <tr>
                <td>Total Price</td>
                <td className="text-right">${grandTotal}</td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">Task Completed</td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <Link to={`/tasks/${task.task_id}/payment/stripe`}>
                    <button type="button" className="btn btn-success">Submit</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </div >
  );
}