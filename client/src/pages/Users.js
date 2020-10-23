import React from 'react';
import useApplicationData from '../hooks/useApplicationData.js'

export default function Users() {

  const {
    state,
    dispatch
  } = useApplicationData();
  const userList = state.users.map((user) => (<li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  ));

  return (
    <div className="App" >
      <h2> Users </h2>
      <ul> {userList} </ul>
    </div >
  );
}