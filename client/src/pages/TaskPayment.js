import React from 'react';
import { Jumbotron, Container} from 'react-bootstrap';
import StripeCheckout from "react-stripe-checkout";
// import axios from 'axios'

import useTaskPaymentData from '../hooks/useTaskPaymentData';
import "./Home.scss";
import "./TaskPayment.scss";

export default function TaskPayment() {
  const { state } = useTaskPaymentData();
  const task = state.taskPayment;
  const rate = (task.hourly_rate/100).toFixed(2);
  const hourlyTotal = (rate * task.total_time).toFixed(2);
  const serviceCharge = (hourlyTotal * 0.10).toFixed(2);
  // const tax = ((hourlyTotal + serviceCharge) * 0.13).toFixed(2); // => NaN I dont know why this does not work
  const tax = ((hourlyTotal * 1.10) * 0.13).toFixed(2);
  const grandTotal = ((rate * task.total_time) * 1.23).toFixed(2);

  const start = !task.start_time ? "" : task.start_time.split(':');
  const end = !task.end_time ? "" : task.end_time.split(':');

  const hours = !start || !end ? "" : Number((end[0] - start[0]).toFixed(0));
  const minutes = !start  || !end ? "" : Number((((end[1] - start[1])) / 60).toFixed(2));

  const timeTotal = end && start && hours + minutes;

  const product = {
    taskId: task.task_id,
    price: grandTotal,
    productBy: "SimpleTask"
  };

  const makePayment = token => {
    const body = {
      token,
      product
    };
    const headers = {
      "Content-Type": "application/json"
    };

    return fetch(`http://localhost:3001/api/payments/success`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    })
      .then(response => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
      })
      .catch(error => console.log(error));
  };


  return (
    <div className="App">
    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 jumbotron">
      <h1 className="header">Payment</h1>
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
          <td className="text-right">{task.start_time}</td>
        </tr>
        <tr>
          <td>End Time</td>
          <td className="text-right">{task.end_time}</td>
        </tr>
        <tr>
          <td>Total Time</td>
          {!timeTotal ?
            (<td className="text-right">{"🦆"}</td>) : null
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
          <td className="text-right total">${grandTotal}</td>
        </tr>
        <tr>
          <td colSpan="2" className="text-center">
            <StripeCheckout
              stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
              token={makePayment}
              name="Buy React"
              amount={product.price * 100}
              shippingAddress
              billingAddress
            >
            <button type="button" className="btn btn-success">Proceed to Pay {'💰'} {grandTotal}</button>
            </StripeCheckout>
          </td>
        </tr>
      </tbody>
    </table>
    </div>



    </Container>
    </div >
    
  );
}