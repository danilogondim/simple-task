import { useEffect, useState } from 'react';


export default function useTasksNewData() {
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

  return {
    progress,
    updateProgressiveBar,
    previousTask
  }
}