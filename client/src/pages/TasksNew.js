import React, { useEffect, useState } from 'react';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import TaskerListItem from '../components/TaskerListItem';
import { useForm } from 'react-hook-form';
import randomString from '../helpers/randomString';
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './TasksNew.scss';
import Geocode from "react-geocode";

//Google Geocode Setup
const API_KEY = process.env.REACT_APP_GOOGLE_API;
Geocode.setApiKey(API_KEY);
Geocode.setLanguage("en");
Geocode.setRegion("ca");
Geocode.enableDebug();


export default function TasksNew() {
  const day = new Date(localStorage.getItem('day'));
  const date = day.getDate();
  const month = day.getMonth();
  const year = day.getFullYear();

  const tasker = JSON.parse(localStorage.getItem('tasker'));

  const { register, handleSubmit, errors, watch, getValues } = useForm({ reValidateMode: 'onChange' });

  // control the progressive bar
  const [progress, setProgress] = useState(0);
  const [valid, setValid] = useState({});

  // text and select fields will be managed onBlur or onChange with this function
  const updateProgressiveBar = () => {
    const { description, estimated_duration, start_location } = getValues(['description', 'estimated_duration', 'start_location']);
    // count description field as complete
    if (description && description.length !== 0 && !valid.description) {
      setProgress(prev => prev + 20)
      setValid(prev => ({ ...prev, description: true }))
    } else if (!description && valid.description) {
      setProgress(prev => prev - 20)
      setValid(prev => ({ ...prev, description: false }))
    }
    // count estimated_duration field as complete
    if (Number(estimated_duration) > 0 && !valid.duration) {
      setProgress(prev => prev + 20)
      setValid(prev => ({ ...prev, duration: true }))
    } else if (Number(estimated_duration) === 0 && valid.duration) {
      setProgress(prev => prev - 20)
      setValid(prev => ({ ...prev, duration: false }))
    }
    // count start_location field as complete
    if (start_location && start_location.length !== 0 && !valid.start_location) {
      setProgress(prev => prev + 20)
      setValid(prev => ({ ...prev, start_location: true }))
    } else if (!start_location && valid.start_location) {
      setProgress(prev => prev - 20)
      setValid(prev => ({ ...prev, start_location: false }))
    }
  }

  // time field will be managed after every change (onBlur and onChange did not work well with this field)
  const { time } = watch(['time']);
  useEffect(() => {
    // count time field as complete
    if (time && time.length !== 0 && !valid.time) {
      setProgress(prev => prev + 20)
      setValid(prev => ({ ...prev, time: true }))
    } else if (!time && valid.time) {
      setProgress(prev => prev - 20)
      setValid(prev => ({ ...prev, time: false }))
    }
  }, [time, valid]);


  const onSubmit = (task) => {

    task['tasker_id'] = tasker.id
    task['number'] = randomString(32);
    task['token'] = localStorage.getItem('token');
    task['category_id'] = localStorage.getItem('category_id')
    task['service_id'] = localStorage.getItem('service_id')
    task.time = `${year}-${month + 1}-${date} ${task.time}`
    console.log(task);

    // const promises = [Geocode.fromAddress(task.start_location)]
    // if (task.end_location !== "") {
    //   promises.push(Geocode.fromAddress(task.end_location))
    // };

    // Promise.all(promises)
    //   .then(all => {
    //     const { lat, lng } = all[0].results[0].geometry.location;
    //     task['start_coordinates'] = [lat, lng];
    //     if (all.length === 2) {
    //       const { lat, lng } = all[1].results[0].geometry.location;
    //       task['end_coordinates'] = [lat, lng];
    //     }
    //     console.log(task);
    //   }).then(() => {
    //     // axios
    //     //   .post('/api/tasks/', task)
    //     //   .then((task) => {

    //     //   }
    //     //   )
    //     //   .catch(err => {
    //     //     console.error(err);
    //     //   });

    //     //   },
    //     //   error => {
    //     //     console.error(error);
    //     //   }
    //     // );
    //   }).catch(e => console.log(e.message));



    // tasks table required fields:
    // tasker_id INTEGER REFERENCES users(id) ON DELETE CASCADE,   ------------------>     // ok!!!
    // number VARCHAR(255),   ------------------------------------------------------->     // ok!!!
    // category_id INTEGER    ------------------------------------------------------->     // ok!!!
    // service_id INTEGER     ------------------------------------------------------->     // ok!!!
    // description VARCHAR(255) NOT NULL,   ----------------------------------------->     // ok!!!
    // estimated_duration INTEGER NOT NULL,   --------------------------------------->     // ok!!!
    // start_location VARCHAR(255) NOT NULL,   -------------------------------------->     // ok!!!
    // start_coordinates VARCHAR[],  ------------------------------------------------>     // ok!!!
    // end_location VARCHAR(255),   ------------------------------------------------->     // ok!!!
    // end_coordinates VARCHAR[],   ------------------------------------------------->     // ok!!!
    // user_id INTEGER              -------------------------------------------------> sending token
    // start_time TIMESTAMP NOT NULL,   --------------------------------------------->     // ok!!!
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
              <input name="description" type="textarea" onBlur={updateProgressiveBar} placeholder="Please let your tasker know any important detail to fulfill the task" ref={register({ required: true })} />
              {errors.description && <p> This is a mandatory field. </p>}


              <label>Estimated duration: </label>
              <div className="input-group mb-3">
                <select className="custom-select" onChange={updateProgressiveBar} onClick={e => e.preventDefault()} name="estimated_duration" ref={register({ validate: value => value !== '0' })}>
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
              <input type="time" name="time" min="00:00" max="23:00" ref={register({ required: true })} />
              {errors.time && <p> This is a mandatory field. </p>}


              <label>Start location: </label>
              <input type="text" name="start_location" onBlur={updateProgressiveBar} ref={register({ required: true })} />
              {errors.start_location && <p> This is a mandatory field. </p>}


              <label>End location if different from start location: </label>
              <input type="text" name="end_location" ref={register()} />


              <label>Please confirm the information and submit below</label>


              <button type="submit">
                Create Task
              </button>

            </form>

          </div>
        </>
      }
    </main>
  );
}