import React, { useState } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import useTaskPaymentData from '../hooks/useTaskPaymentData';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import axios from 'axios';


import "./Home.scss";
import "./TaskPayment.scss";
// import TasksNew from "./simple-task/client/src/pages/TasksNew";

export default function TaskComplete() {
  const { state } = useTaskPaymentData();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [complete, setComplete] = useState();
  const [processing, setProcessing] = useState()
  console.log(processing)
  const start = !startTime ? "" : startTime;
  const end = !endTime ? "" : endTime;

  const hours = !startTime || !endTime ? "" : Number(end.getHours() - start.getHours());
  const minutes = !startTime || !endTime ? "" : Number(((end.getMinutes() - start.getMinutes()) / 60).toFixed(2));

  const timeTotal = end && start && hours + minutes;

  const task = state.taskPayment;
  const rate = (task.hourly_rate / 100).toFixed(2);

  const hourlyTotal = (rate * timeTotal).toFixed(2);
  const serviceCharge = (hourlyTotal * 0.10).toFixed(2);
  // const tax = ((hourlyTotal + serviceCharge) * 0.13).toFixed(2); // => NaN I dont know why this does not work
  const tax = ((hourlyTotal * 1.10) * 0.13).toFixed(2);
  const grandTotal = ((rate * timeTotal) * 1.23).toFixed(2);
  
  // Not linked to with calculation yet
  const discount = (1 - 1).toFixed(2)

  const onSubmit = () => {
    
    setProcessing(true);

    const newStart = new Date(start).toLocaleTimeString();
    const newEnd = new Date(end).toLocaleTimeString();  

    const data = { 
      id: task.task_id,
      started_at: newStart,
      completed_at: newEnd,
    };

    setTimeout(() => {
      axios
        .post(`/api/tasks/${task.task_id}`, data)
        .then((res) => console.log(res))
        .then(setProcessing(false), setComplete(true))
        .catch((err) => console.error(err))
    }, 2000)
    
  }

  return (
    <div className="App">
      <Container className="p-3">
        <Jumbotron className="p-3 mb-2 jumbotron">
          <h1 className="header">Task Completion</h1>
        </Jumbotron>

          <div className="payment table-responsive">
            <table className="table">
              <thead className="thead">
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
                  {!timeTotal ?
                    (<td className="text-right total">{"🦆"}</td>) : null
                  }

                  {timeTotal && timeTotal <= 0 ?
                    (<td className="text-right bg-danger">{"Wrong selection, select time in 24HR format"}</td>) : null
                  }

                  {timeTotal  && timeTotal > 0 && timeTotal < 1 ?
                    (<td className="text-right total">{(timeTotal * 60).toFixed(0)} Minutes</td>) : null
                  }

                  {timeTotal && timeTotal === 1 ?
                    (<td className="text-right total">{timeTotal} Hour</td>) : null
                  }

                  {timeTotal && timeTotal > 1 && timeTotal < 2 && minutes < 0 ?
                    (<td className="text-right total">{hours - 1} Hour {(60 + (minutes * 60)).toFixed(0)} Minutes</td>) : null
                  }

                  {timeTotal && timeTotal > 1 && timeTotal < 2 && minutes > 0 ?
                    (<td className="text-right total">{hours} Hour {(minutes * 60).toFixed(0)} Minutes</td>) : null
                  }

                  {timeTotal && timeTotal >= 2 && minutes === 0 ?
                    (<td className="text-right total">{hours} Hours</td>) : null
                  }

                  {timeTotal && timeTotal >= 2 && minutes < 0 ?
                    (<td className="text-right total">{hours - 1} Hours {(60 + (minutes * 60)).toFixed(0)} Minutes</td>) : null
                  }

                  {timeTotal && timeTotal >= 2 && minutes > 0 ?
                    (<td className="text-right total">{hours} Hours {(minutes * 60).toFixed(0)} Minutes</td>) : null
                  }
                </tr>
              </tbody>
            </table>

            <table className="table">
              <thead className="thead">
                <tr>
                  <th colSpan="2" scope="col">Payment Info</th>
                </tr>
              </thead>
              <tbody className="text-left">
                <tr>
                  <td>Hourly Total</td>
                  <td className="text-right form-control">
                      ${hourlyTotal}
                  </td>
                </tr>
                <tr>
                  <td className="text-wrap">Discount</td>
                <td className="text-right form-control">${discount}</td>
                </tr>
                <tr>
                  <td>Service Charge</td>
                  <td className="text-right form-control">
                      ${serviceCharge}
                  </td>
                </tr>
                <tr>
                  <td>Tax</td>
                  <td className="text-right form-control">
                      ${tax}
                  </td>
                </tr>
                <tr>
                  <td>Total Price</td>
                  <td className="text-right form-control total">
                      ${grandTotal}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="status">
              {!processing && !complete &&
                <button type="submit" onClick={onSubmit} className="btn btn-info">Review and Submit</button>
              }
              
              {processing &&
                <div className="spinner-border text-success" role="status">
                  <span className="sr-only">Loading...</span>
                </div> 
              }

              {complete && 
              <div>
                <h4 className='text-success'>Completed {'👍'}</h4>
                <button type="submit" onClick={() =>  window.location.href='/'} className="btn btn-info">Home</button>
              </div>
              }
            </div>
          </div>
      </Container>
    </div >
  );
}