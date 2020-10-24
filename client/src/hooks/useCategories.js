import { useEffect, useReducer } from 'react';
import dataReducer, { SET_CATEGORIES } from '../reducer/data_reducer';
import axios from 'axios';

const useCategories = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    categories: [],
    loading: true,
  });
  
  useEffect(() => {
    axios
      .get('/api/categories')
      .then(({data}) => dispatch({type: SET_CATEGORIES, categories: data}))
      .catch((err) => console.log(err));
  }, []);

  return {state, dispatch};
};

export default useCategories;