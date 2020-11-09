import { useState, useEffect, useReducer } from 'react';
import dataReducer, { SET_USERS } from '../reducer/data_reducer';
import axios from 'axios';

const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/users',
    })
      .then(({
        data
      }) => {
        console.log(data);
        dispatch({
          type: SET_USERS,
          users: data
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (token) {
      return setSocket(new WebSocket(process.env.REACT_APP_WEBSOCKET_URL));
    }
  }, [token])

  // does it need to be in a useEffect?
  if (socket) {

    socket.onopen = function () {
      socket.send(JSON.stringify({ type: "connection", token }));
    };

    if (!token) {
      socket.send(JSON.stringify({ type: "disconnection" }));
      socket.close();
    }
  }

  return {
    state,
    dispatch,
    token,
    setToken,
    socket
  };
};

export default useApplicationData;