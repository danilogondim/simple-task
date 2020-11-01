import React from 'react';
import ContactList from './ChatBox/ContactList';
import MessageList from './ChatBox/MessageList';
import useChatBoxData from '../hooks/useChatBoxData';
import TextField from '@material-ui/core/TextField';
import { Send } from '@material-ui/icons';
import './ChatBox.scss';



export default function ChatBox(props) {

  const { state,
    dispatch,
    onSubmit,
    active,
    error,
    setActive,
    user,
    register,
    handleSubmit,
    chat } = useChatBoxData(props);


  return (

    <>
      {user && active &&
        <section className="chat-box">
          <div className="contact-list">
            <ContactList chats={state.chats} dispatch={dispatch} />
          </div>
          <MessageList chat={chat} />
          <form className="chat-message-form" onSubmit={handleSubmit(onSubmit)}>
            <TextField name="message" inputRef={register} label="Type a message" />
            <button><Send /></button>
            {error && <p>Please select a contact to send your message</p>}
          </form>
          <button className="toggle-chat" onClick={() => setActive(false)}>Exit chat</button>
        </section>
      }
      {!active && user && <button className="toggle-chat" onClick={() => setActive(true)}>Chat</button>}
    </>

  )
}