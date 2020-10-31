import React from 'react';

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

    <>
      {messages}
    </>

  )
}