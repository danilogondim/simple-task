import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { SET_CONTACT } from '../../reducer/data_reducer';


export default function UserList(props) {

  const { chats, dispatch } = props;

  const contacts = !chats ? "" : chats.map(contact => {
    return <
      Avatar
      key={contact.contact_id}
      alt={contact.contact_name}
      src={contact.contact_photo}
      onClick={() => dispatch({ type: SET_CONTACT, contact: contact.contact_id })}
    />
  })

  return (
    <>
      {contacts}
    </>
  )
}