import React from 'react';
import './ChatBox.scss';
import UserList from './ChatBox/UserList';
import MessageList from './ChatBox/MessageList';
import InputBox from './ChatBox/InputBox';
import ToggleChat from './ChatBox/ToggleChat';

export default function ChatBox() {

  return (

    <section className="chat-box">
      <UserList />
      <MessageList />
      <InputBox />
      <ToggleChat />
    </section>

  )
}