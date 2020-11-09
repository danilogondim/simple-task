import { useState, useEffect } from 'react';

const useApplicationData = () => {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (token && !socket) {
      return setSocket(new WebSocket(process.env.REACT_APP_WEBSOCKET_URL));
    }

    if (socket) {

      socket.onopen = function () {
        socket.send(JSON.stringify({ type: "connection", token }));
      };

      if (!token && socket.readyState === 1) {
        socket.send(JSON.stringify({ type: "disconnection" }));
        socket.close();
        setSocket(null);
      }
    }

  }, [token, socket])

  return {
    token,
    setToken,
    socket
  };
};

export default useApplicationData;