import { useEffect, useReducer } from 'react';
import dataReducer, { SET_TASKERS } from '../reducer/data_reducer';
import axios from 'axios';

const useServiceData = id => {
  const [state, dispatch] = useReducer(dataReducer, {
    taskers: [],
    loading: true,
    day: new Date(),
    range: [9, 15]
  });

  useEffect(() => {
    axios
      .get(`/api/services/${id}/users`)
      .then(({ data }) => dispatch({ type: SET_TASKERS, taskers: data }))
      .catch((err) => console.log(err));
  }, [id]);

  return { state, dispatch };
};

export default useServiceData;