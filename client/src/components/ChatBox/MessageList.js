import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {List} from '@material-ui/core';
import "./MessageList.scss"

export default function MessageList(props) {
  const { chat } = props;

  const messages = !chat ? "" : chat.messages.map((message, index) => {
    return (
      <div key={index}>
        {/* <p>{message.sender_id}</p> */}
        <p>{message.sent_at}</p>
        <p>{message.message}</p>
      </div>
    )
  })

  return (

    <List className="chat-list">
      {messages}
    </List>

  )
}