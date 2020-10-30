import { useEffect, useReducer } from 'react';
import dataReducer, { SET_CHATS } from '../reducer/data_reducer';
import axios from 'axios';

const useChatBoxData = (token) => {

  const [state, dispatch] = useReducer(dataReducer, {
    chats: []
  });

  useEffect(() => {
    if (token) {
      axios
        .get(`/api/users/token/${token}/chats`)
        .then(({ data }) => dispatch({ type: SET_CHATS, chats: data }))
        .catch((err) => console.log(err));
    }
  }, [token]);

  return { state, dispatch };
};

export default useChatBoxData;