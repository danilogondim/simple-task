import React, { useRef, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import "./MessageList.scss"
import classNames from 'classnames';

export default function MessageList(props) {
  const { chat, contact } = props;

  const bottomRef = useRef();


  useEffect(() => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  }, [chat])

  const messages = !chat ? "" : chat.messages.map((message, index) => {
    const messageClass = classNames("text", {
      "user": message.sender_id !== contact,
      "contact": message.sender_id === contact
    });
    return (
      <ListItem alignItems="flex-start" className="message" key={index}>
        <ListItemText className={messageClass}
          primary={message.message}
          secondary={message.sent_at}
        />
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