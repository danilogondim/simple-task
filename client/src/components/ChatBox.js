import React from 'react';
import './ChatBox.scss';
import ContactList from './ChatBox/ContactList';
import MessageList from './ChatBox/MessageList';
import ToggleChat from './ChatBox/ToggleChat';
import TextField from '@material-ui/core/TextField';
import useChatBoxData from '../hooks/useChatBoxData';


export default function ChatBox() {
  const user = JSON.parse(localStorage.getItem('user'));

  const id = !user ? '' : user.id;
  const { state, dispatch } = useChatBoxData(id);
  const { chats, contact } = state;
  const chat = chats.find(chat => chat.contact_id === contact);

  return (

    <section className="chat-box">
      <div className="contact-list">
        <ContactList chats={chats} dispatch={dispatch} />
      </div>
      <MessageList chat={chat} />
      <TextField id="standard-basic" label="Type a message" />
      <ToggleChat />
    </section>

  )
}