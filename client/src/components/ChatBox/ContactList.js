import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { SET_CONTACT } from '../../reducer/data_reducer';
import classNames from 'classnames';
import "./ContactList.scss";



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
export default function UserList(props) {
  const classes = useStyles();

  const { chats, dispatch, contact } = props;

  const contacts = !chats ? "" : chats.map(chat => {
    const contactClass = classNames("contact", {
      "contact-selected": chat.contact_id === contact,
      "contact-unselected": chat.contact_id !== contact
    });
    return <div className={contactClass}>
      < Avatar
        className={classes.large}
        key={chat.contact_id}
        alt={chat.contact_name}
        src={chat.contact_photo}
        onClick={() => dispatch({ type: SET_CONTACT, contact: chat.contact_id })}
      />
    </div>
  })

  return (
    <>
      {contacts}
    </>
  )
}