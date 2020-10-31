import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import ContactList from './ChatBox/ContactList';
import MessageList from './ChatBox/MessageList';
import useChatBoxData from '../hooks/useChatBoxData';
import TextField from '@material-ui/core/TextField';
import { Send } from '@material-ui/icons';
import './ChatBox.scss';



export default function ChatBox(props) {
  const { socket } = props;
  const user = JSON.parse(localStorage.getItem('user'));
  const [active, setActive] = useState(false);
  const [error, setError] = useState(null);

  const id = !user ? '' : user.id;
  const { state, dispatch } = useChatBoxData(id);
  const { chats, contact } = state;
  const chat = chats.find(chat => chat.contact_id === contact);

  const { register, handleSubmit, reset } = useForm();

  console.log(chats);
  const onSubmit = (message) => {
    if (!contact) {
      setError(true);
    } else {
      setError(false);
      const newMessage = { ...message, sender_id: id, receiver_id: contact, sent_at: new Date() }
      reset()
      socket.send(JSON.stringify({ event: "message", message: newMessage }));

      axios
        .post('/api/chats/', newMessage)
        .then(res => console.log(res.data))
        .catch(err => {
          console.error(err);
        });
    }
  }
  return (

    <>
      {user && active &&
        <section className="chat-box">
          <div className="contact-list">
            <ContactList chats={chats} dispatch={dispatch} />
          </div>
          <MessageList chat={chat} />
          <form className="chat-message-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField name="message" inputRef={register} label="Type a message" />
            <button><Send /></button>
            {error && <p>Please select a contact to send your message</p>}
          </form>
          <button className="toggle-chat" onClick={() => setActive(false)}>Close!</button>
        </section>
      }
      {!active && user && <button className="toggle-chat" onClick={() => setActive(true)}>Open!</button>}
    </>

  )
}