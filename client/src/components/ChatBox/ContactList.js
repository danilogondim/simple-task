import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Badge from '@material-ui/core/Badge';
import { SET_CONTACT } from '../../reducer/data_reducer';
import classNames from 'classnames';
import "./ContactList.scss";

const OnBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);
const OffBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#ff0000',
    color: '#ff0000',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
export default function UserList(props) {
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