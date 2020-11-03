import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import useTasksNewData from '../hooks/useTasksNewData';
import LinearProgressWithLabel from '../components/LinearProgressWithLabel';
import TaskerListItem from '../components/TaskerListItem';
import './TasksNew.scss';
import { Jumbotron, Container, Card } from 'react-bootstrap'

export default function TasksNew() {
  const { progress,
    updateProgressiveBar,
    previousTask,
    date,
    month,
    year,
    token,
    tasker,
    onSubmit
  } = useTasksNewData();

  const { register, handleSubmit, errors, getValues } = useForm(
    { defaultValues: { ...JSON.parse(previousTask) } },
    { reValidateMode: 'onChange' }
  );

  return (
    <main className="new-task">
      {!tasker && (
        <div className="alert alert-primary" role="alert">
          <h2>It seems that you have not selected any service.</h2>
          <br />
          <h4>Navigate to our <Link to='/'>homepage</Link> and start browsing the different categories and services.</h4>
        </div>)
      }
      {tasker &&
        <>
        
      
        

        <Container className="p-3">
          <Jumbotron className="p-3 mb-2 jumbotron">
          <div className="TitleTask">
            <h1>Please fill the information below</h1>
          </div>
          </Jumbotron>

          

          
          <div className="BodyTask">

          <div className="row">

          <div className="col">                 
          <div className="left">
            <h1>Booking</h1>
            <h3>Task: {localStorage.getItem('service_name')}</h3>
            <h3>Date: {`${year}/${month + 1}/${date}`}</h3>

            <div className="AlignElements">
            <LinearProgressWithLabel value={progress} />
            <div className="Selected-Tasker"><TaskerListItem tasker={tasker} /></div>
            </div>
            

          </div>
          </div> 
         

          <div className="col">  
          <div className="right">
            

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


              <label>Start location: (If it is remote, type "remote") </label>
              <input type="text" name="start_location" onBlur={() => updateProgressiveBar('start_location', getValues(['start_location']))} ref={register({ required: true })} />
              {errors.start_location && <p> This is a mandatory field. </p>}


              <label>End location if different from start location: </label>
              <input type="text" name="end_location" ref={register()} />


              <label>Please confirm the information and submit below</label>

              <div className="Button-taskNew">
              <button 
              type="submit"
              >
                Create Task
              </button>
              </div>

              {previousTask && !token && (
                <div className="alert alert-danger error-message" role="alert">
                  Please <Link to='/login'>login</Link> or <Link to='/register'>register</Link> to complete your booking
                </div>
              )}

            </form>

          </div>
          </div>
          </div>
          
          </div>
        </Container>
          
       
        </>

      }
    </main>
  );
}