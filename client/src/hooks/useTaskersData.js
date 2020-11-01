import { useEffect, useReducer } from 'react';
import dataReducer, { SET_TASKERS } from '../reducer/data_reducer';
import axios from 'axios';



const useTaskersData = (id) => {
  const [state, dispatch] = useReducer(dataReducer, {
    taskers: [],
    loading: true,
  });

  useEffect(() => {
    axios({
      method: 'GET',
      url: `/api/services/${id}/users`,
      //input a filter here
    })
      .then(({
        data
      }) => {
        console.log(data);
        dispatch({
          type: SET_TASKERS,
          taskers: data
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  return {
    state,
    dispatch,
  };
};

export default useTaskersData;