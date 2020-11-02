import { useEffect, useState } from 'react';
import randomString from '../helpers/randomString';
import axios from 'axios';
import { useHistory } from "react-router-dom";


export default function useTasksNewData() {

  const history = useHistory();

  const day = new Date(localStorage.getItem('day'));
  const date = day.getDate();
  const month = day.getMonth();
  const year = day.getFullYear();
  const token = localStorage.getItem('token');
  const tasker = JSON.parse(localStorage.getItem('tasker'));

  const [progress, setProgress] = useState(0);
  const [valid, setValid] = useState({});
  const previousTask = localStorage.getItem('task');
  useEffect(() => {
    if (previousTask) {
      setProgress(80);
      setValid(prev => ({ description: true, estimated_duration: true, start_location: true, time: true }));
    }
  }, [previousTask])

  // text and select fields will be managed onBlur or onChange with this function
  const updateProgressiveBar = (type, { description, estimated_duration, start_location, time }) => {
    localStorage.removeItem('task');
    switch (type) {
      case "description":
        // count description field as complete
        if (!previousTask && description && description.length !== 0 && !valid.description) {
          setProgress(prev => prev + 20);
          setValid(prev => ({ ...prev, description: true }));
        } else if (!description && valid.description) {
          setProgress(prev => prev - 20);
          setValid(prev => ({ ...prev, description: false }));
        }
        break;
      case "estimated_duration":
        // count estimated_duration field as complete
        if (!previousTask && Number(estimated_duration) > 0 && !valid.estimated_duration) {
          setProgress(prev => prev + 20);
          setValid(prev => ({ ...prev, estimated_duration: true }));
        } else if (Number(estimated_duration) === 0 && valid.estimated_duration) {
          setProgress(prev => prev - 20);
          setValid(prev => ({ ...prev, estimated_duration: false }));
        }
        break;
      case "start_location":
        // count start_location field as complete
        if (!previousTask && start_location && start_location.length !== 0 && !valid.start_location) {
          setProgress(prev => prev + 20);
          setValid(prev => ({ ...prev, start_location: true }));
        } else if (!start_location && valid.start_location) {
          setProgress(prev => prev - 20);
          setValid(prev => ({ ...prev, start_location: false }));
        }
        break;
      case "time":
        // time field will be managed after every change (onBlur and onChange did not work well with this field)
        if (!previousTask && time && time.length !== 0 && !valid.time) {
          setProgress(prev => prev + 20);
          setValid(prev => ({ ...prev, time: true }));
        } else if (!time && valid.time) {
          setProgress(prev => prev - 20);
          setValid(prev => ({ ...prev, time: false }));
        }
        break;
      case "task_created":
        setProgress(prev => prev + 20);
        break;
      default:
        break;
    }
  }


  const onSubmit = async (task) => {

    task['tasker_id'] = tasker.id;
    task['number'] = randomString(32);
    task['category_id'] = localStorage.getItem('category_id');
    task['service_id'] = localStorage.getItem('service_id');
    task.start_time = `${year}-${month + 1}-${date} ${task.time}`;

    if (token) {
      task['token'] = token;
      try {
        const response = await axios.get(`${window.location.protocol}//nominatim.openstreetmap.org/search?format=json&q='+${task.start_location}`);
        task.start_coordinates = [response.data[0].lat, response.data[0].lon]
      } catch (error) {
        console.log(error)
      }
      if (task.end_location !== "") {
        try {
          const response = await axios.get(`${window.location.protocol}//nominatim.openstreetmap.org/search?format=json&q='+${task.end_location}`);
          task.end_coordinates = [response.data[0].lat, response.data[0].lon]
        } catch (error) {
          console.log(error)
        }
      };
      axios
        .post('/api/tasks/new', task)
        .then(task => {
          localStorage.removeItem('task');   // if everything went right, we can empty the task (also empty if user navigates to other pages that are different than login or register)
          updateProgressiveBar('task_created', {});
          history.push(`/tasks/${task.data.id}`);
        })
        .catch(err => {
          console.error(err);
        });
    } else {
      localStorage.setItem('task', JSON.stringify(task));
    }
  }

  return {
    progress,
    updateProgressiveBar,
    previousTask,
    date,
    month,
    year,
    token,
    tasker,
    onSubmit
  }
}