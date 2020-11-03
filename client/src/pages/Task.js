import React from 'react';
import useTaskData from '../hooks/useTaskData';
import { useForm } from 'react-hook-form';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import TaskerListItem from '../components/TaskerListItem';
import { CheckCircle } from '@material-ui/icons';
import './TasksNew.scss';
import { Jumbotron, Container } from 'react-bootstrap'

export default function Task() {

  const { state } = useTaskData();

  const { description, estimated_duration, start_time, start_location, end_location } = state.task;
  const time = !start_time ? "" : start_time.split("T")[1].slice(0, 5);

  const { register } = useForm()

  return (
    <main className="new-task">

    <Container className="p-3">
    <Jumbotron className="p-3 mb-2 jumbotron">
      <div className="TitleTask">
      <h1>Please fill the information below</h1>
      </div>
    </Jumbotron>

      {state.tasker &&
        <>

        <div className="BodyTask">

        <div className="row">

        <div className="col"> 

          <div className="left">
            <h3>Task: {state.task.service_name}</h3>
            <h3>Date: {state.task.start_time.slice(0, 10).replace(/-/g, "/")}</h3>
            <h1>Booked!!!  <CheckCircle /></h1>

            <div className="AlignElements">
              <LinearProgressWithLabel value={100} />
              <TaskerListItem tasker={state.tasker} />
            </div>

          </div>

        </div> 

        <div className="col"> 

          <div className="right">
            <h1>Task information</h1>

            <form className='new-task-form'>


              <label>Task description: </label>
              <textarea name="description" rows="4" type="textarea" readOnly disabled value={description} ref={register({ required: true })} />


              <label>Estimated duration: </label>
              <div className="input-group mb-3">
                <select className="custom-select" name="estimated_duration" readOnly disabled value={estimated_duration} ref={register({ validate: value => value !== '0' })}>
                  <option value="0">Choose...</option>
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                  <option value="5">5 hours</option>
                  <option value="6">6+ hours</option>
                </select>
              </div>


              <label>Start time: </label>
              <input type="time" name="time" min="00:00" max="23:00" readOnly disabled value={time} ref={register({ required: true })} />


              <label>Start location: </label>
              <input type="text" name="start_location" readOnly disabled value={start_location} ref={register({ required: true })} />


              <label>End location: </label>
              <input type="text" name="end_location" readOnly disabled value={end_location} ref={register()} />

            </form>

          </div>
          
        </div>
        </div>
        </div>
        </>
      }
    </Container>
    </main>
  );
}