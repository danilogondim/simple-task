import { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import dataReducer, { SET_TASK, SET_TASKER } from '../reducer/data_reducer';
import axios from 'axios';

const useTaskData = () => {

  const { id } = useParams();

  const [state, dispatch] = useReducer(dataReducer, {
    task: {},
    loading: true,
    tasker: null
  });

  useEffect(() => {
    axios
      .get(`/api/tasks/${id}`)
      .then(({ data }) => {
        dispatch({ type: SET_TASK, task: data[0] })
        axios
          .get(`/api/users/${data[0].tasker_id}`)
          .then(({ data }) => dispatch({ type: SET_TASKER, tasker: data }))
      })
      .catch(e => console.log(e))
  }, [id])

  useEffect(() => {
    if (state.tasker && !state.tasker.hourly_rate) {
      const { hourly_rate } = state.task;
      const newTasker = { ...state.tasker, hourly_rate };
      dispatch({ type: SET_TASKER, tasker: newTasker });
    }
  }, [state.tasker, state.task])

  return { state };
};

export default useTaskData;