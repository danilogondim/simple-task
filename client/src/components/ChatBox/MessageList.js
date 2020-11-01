import React, { useRef, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import "./MessageList.scss"

export default function MessageList(props) {
  const { chat } = props;

  const bottomRef = useRef();


  useEffect(() => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }, [chat])

  const messages = !chat ? "" : chat.messages.map((message, index) => {
    return (
      <ListItem alignItems="flex-start" className="message" key={index}>
        <ListItemText className="text"
          primary={message.message}
          secondary={message.sent_at}
        />
        <hr />
      </ListItem>
    )
  })

  return (
    <div className="autoscroll-container">
      <List className="chat-list scroll-list">
        {messages}
      </List>
      <div ref={bottomRef} className="list-bottom"></div>
    </div>
  )
}