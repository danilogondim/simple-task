import { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import dataReducer, { SET_CHATS, SET_CONTACT, SET_ONLINE_CLIENTS } from '../reducer/data_reducer';
import axios from 'axios';

const useChatBoxData = (props) => {

  const { socket } = props;
  // check if there is a current user and get his id
  const user = JSON.parse(localStorage.getItem('user'));
  const id = !user ? '' : user.id;
  // control if the chat is shown (toggle button)
  const [active, setActive] = useState(false);
  // check if a message is blank before trying to submit the form
  const [error, setError] = useState(null);
  // control new messages
  const [newMessage, setNewMessage] = useState(false);
  // check if there is an axios request to be done
  const [pending, setPending] = useState(true);

  const [state, dispatch] = useReducer(dataReducer, {
    chats: [],
    contact: null,
    online: [],
    loading: true
  });

  useEffect(() => {
    // make sure that when a user logout, the chat will be hidden and the previous selected contact will be reset
    if (!id) {
      setActive(false);
      dispatch({ type: SET_CONTACT, contact: null })
    }
    if ((id && newMessage) || (id && pending)) {
      axios
        .get(`/api/users/${id}/chats`)
        .then(({ data }) => dispatch({ type: SET_CHATS, chats: data }))
        .catch((err) => console.log(err));
    }
    setPending(false)
    setNewMessage(false)
  }, [id, newMessage, pending]);

  useEffect(() => {
    setPending(true);
  }, [user]);

  if (socket) {
    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      const { type, sender_id, receiver_id, clients } = data;
      if (type === "new-message") {
        setNewMessage(true);
        setActive(true);
        if (sender_id) {
          dispatch({ type: SET_CONTACT, contact: sender_id })
        }
        if (receiver_id) {
          dispatch({ type: SET_CONTACT, contact: receiver_id })
        }
      }
      if (type === "new-connection") {
        dispatch({ type: SET_ONLINE_CLIENTS, online: clients })
      }
      if (type === "new-disconnection") {
        dispatch({ type: SET_ONLINE_CLIENTS, online: clients })
      }
    };
  }

  const chat = state.chats.find(chat => chat.contact_id === state.contact);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (message) => {
    if (!message.message) {
      setError(true);
    } else {
      setError(false);
      const newMessage = { ...message, sender_id: id, receiver_id: state.contact, sent_at: new Date().toLocaleString() }
      reset()
      socket.send(JSON.stringify({ type: "chat-message", message: newMessage }));

      axios
        .post('/api/chats/', newMessage)
        .then()
        .catch(err => {
          console.error(err);
        });
    }
  }

  return { state, dispatch, onSubmit, active, error, setActive, user, register, handleSubmit, chat };
};

export default useChatBoxData;