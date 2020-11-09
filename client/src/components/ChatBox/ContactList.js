import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { SET_CONTACT } from '../../reducer/data_reducer';
import classNames from 'classnames';
import "./ContactList.scss";
import useContactListStyle from './useContactListStyle';


export default function UserList(props) {
  // get styling settings from a custom hook
  const { 
    OnBadge,
    OffBadge,
    useStyles 
  } = useContactListStyle();
  
  const classes = useStyles();

  const { chats, dispatch, contact, clients } = props;

  const contacts = !chats ? "" : chats.map(chat => {
    const contactClass = classNames("contact", {
      "contact-selected": chat.contact_id === contact,
      "contact-unselected": chat.contact_id !== contact
    });
    return (
      <div className={contactClass} key={chat.contact_id}>
        {clients.includes(String(chat.contact_id)) &&
          <OnBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            < Avatar
              className={classes.large}
              alt={chat.contact_name}
              src={chat.contact_photo}
              onClick={() => dispatch({ type: SET_CONTACT, contact: chat.contact_id })}
            />
          </OnBadge>
        }
        {!clients.includes(String(chat.contact_id)) &&
          <OffBadge
            overlap="circle"
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            variant="dot"
          >
            < Avatar
              className={classes.large}
              alt={chat.contact_name}
              src={chat.contact_photo}
              onClick={() => dispatch({ type: SET_CONTACT, contact: chat.contact_id })}
            />
          </OffBadge>
        }
      </div>
    )
  })

  return (
    <>
      {contacts}
    </>
  )
}