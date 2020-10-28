import { useEffect, useReducer } from 'react';
import dataReducer, { SET_TASK_PAYMENT } from '../reducer/data_reducer';
import axios from 'axios';
import { useParams } from "react-router-dom";


const useTaskPaymentData = () => {
  const { id } = useParams();
  const [state, dispatch] = useReducer(dataReducer, {
    taskPayment: [],
    loading: true,
  });
  useEffect(() => {
    axios
      .get(`/api/tasks/${id}/payment`)
      .then(({data}) => dispatch({type: SET_TASK_PAYMENT, taskPayment: data[0]}))
      .catch((err) => console.log(err));
  }, [id]);

  return {state, dispatch};
};

export default useTaskPaymentData;