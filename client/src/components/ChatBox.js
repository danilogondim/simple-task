import React from 'react';
import ContactList from './ChatBox/ContactList';
import MessageList from './ChatBox/MessageList';
import useChatBoxData from '../hooks/useChatBoxData';
import TextField from '@material-ui/core/TextField';
import { Send } from '@material-ui/icons';
import { SET_CONTACT } from '../reducer/data_reducer';
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

  const contactName = !state.contact ? "" : state.chats.find(contact => contact.contact_id === state.contact).contact_name;

  return (

    <>
      {user && active &&
        <section className="chat-box">
          <div className="contact-list">
            <ContactList chats={state.chats} dispatch={dispatch} contact={state.contact} />
          </div>
          {!state.contact &&
            <p className="no-selected-contact">Please select a contact to start chatting</p>
          }
          {state.contact &&
            <>
              <p className="contact-name">Chatting with: {contactName}</p>
              <MessageList chat={chat} contact={state.contact} />
              <form className="chat-message-form" onSubmit={handleSubmit(onSubmit)}>
                <TextField className="message-input" name="message" inputRef={register} label="Type a message" />
                <button><Send /></button>
                {error && <p>Cannot be blank</p>}
              </form>
            </>
          }
          <button className="toggle-chat" onClick={() => {
            dispatch({ type: SET_CONTACT, contact: null })
            setActive(false)
          }}>Exit</button>
        </section>
      }
      {!active && user && <button className="toggle-chat" onClick={() => setActive(true)}>Chat</button>}
    </>

  )
}