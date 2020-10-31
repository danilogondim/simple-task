import React from 'react';
import './ChatBox.scss';
import UserList from './ChatBox/UserList';
import MessageList from './ChatBox/MessageList';
import ToggleChat from './ChatBox/ToggleChat';
import TextField from '@material-ui/core/TextField';
import useChatBoxData from '../hooks/useChatBoxData';


export default function ChatBox() {
  const user = JSON.parse(localStorage.getItem('user'));

  const id = !user ? '' : user.id;
  useChatBoxData(id);
  return (

    <section className="chat-box">
      <UserList />
      <MessageList />
      <TextField id="standard-basic" label="Type a message" />
      <ToggleChat />
    </section>

  )
}