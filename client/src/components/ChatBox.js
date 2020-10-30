import React, { useContext } from 'react';
import './ChatBox.scss';
import UserList from './ChatBox/UserList';
import MessageList from './ChatBox/MessageList';
import ToggleChat from './ChatBox/ToggleChat';
import TextField from '@material-ui/core/TextField';
import useChatBoxData from '../hooks/useChatBoxData';
import { AppContext } from "../App";


export default function ChatBox() {
  const { token } = useContext(AppContext);

  useChatBoxData(token);
  return (

    <section className="chat-box">
      <UserList />
      <MessageList />
      <TextField id="standard-basic" label="Type a message" />
      <ToggleChat />
    </section>

  )
}