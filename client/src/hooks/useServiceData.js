import { useEffect, useReducer } from 'react';
import useCategories from '../hooks/useCategories';
import dataReducer, { SET_TASKERS } from '../reducer/data_reducer';
import axios from 'axios';

const useServiceData = (category_id, service_id) => {
  const categories = useCategories().state.categories;
  const category = categories.find(element => element.category_id === Number(category_id));
  const service = !category? "": category.services.find(element => element.service_id === Number(service_id));
  
  const [state, dispatch] = useReducer(dataReducer, {
    taskers: [],
    loading: true,
    day: new Date(),
    range: [9, 15]
  });

  useEffect(() => {
    axios
      .get(`/api/services/${service_id}/users`)
      .then(({ data }) => dispatch({ type: SET_TASKERS, taskers: data }))
      .catch((err) => console.log(err));
  }, [service_id]);

  return { state, dispatch, service };
};

export default useServiceData;