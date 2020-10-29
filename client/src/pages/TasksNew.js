import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import useTasksNewData from '../hooks/useTasksNewData';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import TaskerListItem from '../components/TaskerListItem';
import randomString from '../helpers/randomString';
import axios from 'axios';
import Geocode from "react-geocode";
import './TasksNew.scss';


//Google Geocode Setup
const API_KEY = process.env.REACT_APP_GOOGLE_API;
Geocode.setApiKey(API_KEY);
Geocode.setLanguage("en");
Geocode.setRegion("ca");
Geocode.enableDebug();


export default function TasksNew() {
  const { progress, updateProgressiveBar, previousTask } = useTasksNewData();
  const history = useHistory();

  const day = new Date(localStorage.getItem('day'));
  const date = day.getDate();
  const month = day.getMonth();
  const year = day.getFullYear();
  const token = localStorage.getItem('token');
  const tasker = JSON.parse(localStorage.getItem('tasker'));

  const { register, handleSubmit, errors, getValues } = useForm(
    { defaultValues: { ...JSON.parse(previousTask) } },
    { reValidateMode: 'onChange' }
  );

  const onSubmit = (task) => {

    task['tasker_id'] = tasker.id;
    task['number'] = randomString(32);
    task['category_id'] = localStorage.getItem('category_id');
    task['service_id'] = localStorage.getItem('service_id');
    task.start_time = `${year}-${month + 1}-${date} ${task.time}`;

    if (token) {
      task['token'] = token;
      console.log(task);

      const promises = [Geocode.fromAddress(task.start_location)]
      if (task.end_location !== "") {
        promises.push(Geocode.fromAddress(task.end_location))
      };

      Promise.all(promises)
        .then(all => {
          const { lat, lng } = all[0].results[0].geometry.location;
          task['start_coordinates'] = [lat, lng];
          if (all.length === 2) {
            const { lat, lng } = all[1].results[0].geometry.location;
            task['end_coordinates'] = [lat, lng];
          }
        })
        .catch(e => console.log(e.message))
        .then(() => {
          axios
            .post('/api/tasks/new', task)
            .then(task => {
              localStorage.removeItem('task');   // if everything went right, we can empty the task (also empty if user navigates to other pages that are different than login or register)
              updateProgressiveBar('task_created', {});
              history.push(`/tasks/${task.data.id}`);
            })
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      localStorage.setItem('task', JSON.stringify(task));
    }
  }

  return (
    <main className="new-task">
      {!tasker && (
        <div class="alert alert-primary" role="alert">
          <h2>It seems that you have not selected any service.</h2>
          <br />
          <h4>Navigate to our <Link to='/'>homepage</Link> and start browsing the different categories and services.</h4>
        </div>)
      }
      {tasker &&
        <>
          <div className="left">
            <h1>Booking</h1>
            <h3>Task: {localStorage.getItem('service_name')}</h3>
            <h3>Date: {`${year}/${month + 1}/${date}`}</h3>
            <LinearProgressWithLabel value={progress} />
            <TaskerListItem tasker={tasker} />
          </div>
          <div className="right">
            <h1>Please fill the information below</h1>

            <form className='new-task-form' onSubmit={handleSubmit(onSubmit)}>


              <label>Task description: </label>
              <textarea name="description" rows="4" type="textarea" onBlur={() => updateProgressiveBar('description', getValues(['description']))} placeholder="Please let your tasker know any important detail to fulfill the task" ref={register({ required: true })} />
              {errors.description && <p> This is a mandatory field. </p>}


              <label>Estimated duration: </label>
              <div className="input-group mb-3">
                <select className="custom-select" onChange={() => updateProgressiveBar('estimated_duration', getValues(['estimated_duration']))} onClick={e => e.preventDefault()} name="estimated_duration" ref={register({ validate: value => value !== '0' })}>
                  <option value="0">Choose...</option>
                  <option value="1">1 hour</option>
                  <option value="2">2 hours</option>
                  <option value="3">3 hours</option>
                  <option value="4">4 hours</option>
                  <option value="5">5 hours</option>
                  <option value="6">6+ hours</option>
                </select>
              </div>
              {errors.estimated_duration && <p> This is a mandatory field. </p>}


              <label>Start time: </label>
              <input type="time" name="time" min="00:00" max="23:00" onChange={() => updateProgressiveBar('time', getValues(['time']))} ref={register({ required: true })} />
              {errors.time && <p> This is a mandatory field. </p>}


              <label>Start location: </label>
              <input type="text" name="start_location" onBlur={() => updateProgressiveBar('start_location', getValues(['start_location']))} ref={register({ required: true })} />
              {errors.start_location && <p> This is a mandatory field. </p>}


              <label>End location if different from start location: </label>
              <input type="text" name="end_location" ref={register()} />


              <label>Please confirm the information and submit below</label>


              <button type="submit">
                Create Task
              </button>

              {previousTask && !token && (
                <div className="alert alert-danger error-message" role="alert">
                  Please <Link to='/login'>login</Link> or <Link to='/register'>register</Link> to complete your booking
                </div>
              )}

            </form>

          </div>
        </>
      }
    </main>
  );
}