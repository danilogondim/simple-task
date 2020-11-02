import { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import dataReducer, { SET_CHATS, SET_CONTACT } from '../reducer/data_reducer';
import axios from 'axios';

const useChatBoxData = (props) => {

  const { socket } = props;
  const user = JSON.parse(localStorage.getItem('user'));
  // control if the chat is shown (toggle button)
  const [active, setActive] = useState(false);
  // check if a contact was selected to shown some error message and prevent user to send messages if there is no contact selected
  const [error, setError] = useState(null);
  // control new messages
  const [newMessage, setNewMessage] = useState(false);
  // check if there is an axios request to be done
  const [pending, setPending] = useState(true);


  const id = !user ? '' : user.id;
  const [state, dispatch] = useReducer(dataReducer, {
    chats: [],
    contact: null,
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
      if (data === "new-message") {
        setNewMessage(true);
        setActive(true);
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