import { useEffect, useReducer } from 'react';
import dataReducer, { SET_SERVICES } from '../reducer/data_reducer';
import axios from 'axios';

const useServices = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    services: [],
    loading: true,
  });
  
  useEffect(() => {
    axios
      .get('/api/services')
      .then(({data}) => dispatch({type: SET_SERVICES, services: data}))
      .catch((err) => console.log(err));
  }, []);

  return {state, dispatch};
};

export default useServices;