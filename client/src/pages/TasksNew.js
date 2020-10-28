import React, { useEffect, useState } from 'react';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import TaskerListItem from '../components/TaskerListItem';
import { useForm } from 'react-hook-form';
// import axios from 'axios';
import './TasksNew.scss';

export default function TasksNew() {

  const tasker = JSON.parse(localStorage.getItem('tasker'));

  const { register, handleSubmit, errors, watch } = useForm({ mode: "onChange", reValidateMode: 'onChange' });

  // control the progressive bar
  const [progress, setProgress] = useState(0);
  const [valid, setValid] = useState({});
  const allFields = watch();
  useEffect(() => {
    const { description, start_location, time, estimated_duration } = allFields;
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
    // count time field as complete
    if (time && time.length !== 0 && !valid.time) {
      setProgress(prev => prev + 20)
      setValid(prev => ({ ...prev, time: true }))
    } else if (!time && valid.time) {
      setProgress(prev => prev - 20)
      setValid(prev => ({ ...prev, time: false }))
    }
    // count start_location field as complete
    if (start_location && start_location.length !== 0 && !valid.start_location) {
      setProgress(prev => prev + 20)
      setValid(prev => ({ ...prev, start_location: true }))
    } else if (!start_location && valid.start_location) {
      setProgress(prev => prev - 20)
      setValid(prev => ({ ...prev, start_location: false }))
    }
  }, [allFields, valid]);

  const onSubmit = (task) => {
    console.log(task);
    // axios
    //   .post('/api/tasks/', task)
    //   .then((task) => {

    //   }
    //   )
    //   .catch(err => {
    //     console.error(err);
    //   });
  }

  return (
    <main className="new-task">
      <div className="left">
        <LinearProgressWithLabel value={progress} />
        <TaskerListItem tasker={tasker} />
      </div>
      <div className="right">
        <h1>Please fill the information below</h1>

        <form className='new-task-form' onSubmit={handleSubmit(onSubmit)}>


          <label>Task description: </label>
          <input name="description" type="textarea" placeholder="Please let your tasker know any important detail to fulfill the task" ref={register({ required: true })} />
          {errors.description && <p> This is a mandatory field. </p>}


          <label>Estimated duration: </label>
          <div className="input-group mb-3">
            <select className="custom-select" name="estimated_duration" ref={register({ validate: value => value !== '0' })}>
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
          <input type="text" name="start_location" ref={register({ required: true })} />
          {errors.start_location && <p> This is a mandatory field. </p>}


          <label>End location if different from start location: </label>
          <input type="text" name="end_location" />


          <label>Please confirm the information and submit below</label>


          <button type="submit">
            Create Task
         </button>

        </form>


      </div>
    </main>
  );
}