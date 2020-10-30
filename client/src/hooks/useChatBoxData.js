import { useEffect, useReducer } from 'react';
import dataReducer, { SET_CHATS } from '../reducer/data_reducer';
import axios from 'axios';

const useChatBoxData = (id) => {

  const [state, dispatch] = useReducer(dataReducer, {
    chats: []
  });

  useEffect(() => {
    axios
      .get(`/api/users/${id}/chats`)
      .then(({ data }) => dispatch({ type: SET_CHATS, chats: data }))
      .catch((err) => console.log(err));
  }, [id]);

  return { state, dispatch };
};

export default useChatBoxData;