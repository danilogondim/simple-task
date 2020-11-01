import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { SET_CONTACT } from '../../reducer/data_reducer';
import classNames from 'classnames';



export default function UserList(props) {

  const { chats, dispatch, contact } = props;

  const contacts = !chats ? "" : chats.map(chat => {
    const contactClass = classNames({
      "selected": chat.contact_id === contact,
      "unselected": chat.contact_id !== contact
    });
    return <
      Avatar
      className={contactClass}
      key={chat.contact_id}
      alt={chat.contact_name}
      src={chat.contact_photo}
      onClick={() => dispatch({ type: SET_CONTACT, contact: chat.contact_id })}
    />
  })

  return (
    <>
      {contacts}
    </>
  )
}