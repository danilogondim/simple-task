import React, { useRef, useEffect } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';
import "./MessageList.scss"
import classNames from 'classnames';

export default function MessageList(props) {
  const { chat, contact } = props;

  // create a reference and manage scrolling to always show last message when the chat is opened or a new message arrives
  const bottomRef = useRef();
  useEffect(() => {
    bottomRef.current.scrollIntoView();
  }, [chat])

  // render each chat message with the corresponding CSS format
  const messages = !chat ? "" : chat.messages.map((message, index) => {

    // identify which CSS style to apply for a specific chat message (msg sent by user <> msg received from contact)
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

  // render all msgs
  return (
    <div className="autoscroll-container">
      <List className="chat-list scroll-list">
        {messages}
      </List>
      <div ref={bottomRef} className="list-bottom"></div>
    </div>
  )
}