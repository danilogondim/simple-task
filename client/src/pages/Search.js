import React from 'react';
import useTaskersData from '../hooks/useTaskersData.js'




export default function Search() {


  //render users
  const { state } = useTaskersData();
  const users = state.taskers.map(user => {
    return (
      <li key={user.id} > {user.first_name} {user.last_name} {user.email} </li>
  )});


  
    return (
      <>
      <p>RENDER MAP HERE</p>
      <div className="App" >
      <h2> Taskers </h2>
      <ul> {users} </ul>
      </div>

      </>

    )
}
 
