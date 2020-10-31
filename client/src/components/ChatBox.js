import React, { useState } from 'react';
import './ChatBox.scss';
import ContactList from './ChatBox/ContactList';
import MessageList from './ChatBox/MessageList';
import TextField from '@material-ui/core/TextField';
import useChatBoxData from '../hooks/useChatBoxData';


export default function ChatBox() {
  const user = JSON.parse(localStorage.getItem('user'));
  const [active, setActive] = useState(false);

  const id = !user ? '' : user.id;
  const { state, dispatch } = useChatBoxData(id);
  const { chats, contact } = state;
  const chat = chats.find(chat => chat.contact_id === contact);

  return (

    <>
      {user && active &&
        <section className="chat-box">
          <div className="contact-list">
            <ContactList chats={chats} dispatch={dispatch} />
          </div>
          <MessageList chat={chat} />
          <TextField id="standard-basic" label="Type a message" />
          <button className="toggle-chat" onClick={() => setActive(false)}>Close!</button>
        </section>
      }
      {!active && <button className="toggle-chat" onClick={() => setActive(true)}>Open!</button>}
    </>

  )
}