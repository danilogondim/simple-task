import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core';
import "./MessageList.scss"

export default function MessageList(props) {
  const { chat } = props;

  const messages = !chat ? "" : chat.messages.map((message, index) => {
    return (
      <ListItem alignItems="flex-start" className="message" key ={index}>
        <ListItemText className="text"
          primary={message.message}
          secondary={message.sent_at}
        />
        <hr/>
      </ListItem>
    )
  })

  return (

    <List className="chat-list">
      {messages}
    </List>

  )
}