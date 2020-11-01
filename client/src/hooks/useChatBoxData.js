import { useEffect, useReducer, useState } from 'react';
import { useForm } from 'react-hook-form';
import dataReducer, { SET_CHATS } from '../reducer/data_reducer';
import axios from 'axios';

const useChatBoxData = (props) => {

  const { socket } = props;
  const user = JSON.parse(localStorage.getItem('user'));
  // control if the chat is shown (toggle button)
  const [active, setActive] = useState(false);
  // check if a contact was selected to shown some error message and prevent user to send messages if there is no contact selected
  const [error, setError] = useState(null);
  // control new messages
  const [newMessage, setNewMessage] = useState(true);


  const id = !user ? '' : user.id;
  const [state, dispatch] = useReducer(dataReducer, {
    chats: [],
    contact: null,
    loading: true
  });

  useEffect(() => {
    if (id && newMessage) {
      axios
        .get(`/api/users/${id}/chats`)
        .then(({ data }) => dispatch({ type: SET_CHATS, chats: data }))
        .catch((err) => console.log(err));
    }
    setNewMessage(false);
  }, [id, newMessage]);

  if (socket) {
    socket.onmessage = event => {
      const data = JSON.parse(event.data);
      if (data === "new-message"){
        setNewMessage(true);
      }
    };
  }
 


  const chat = state.chats.find(chat => chat.contact_id === state.contact);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (message) => {
    if (!state.contact) {
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