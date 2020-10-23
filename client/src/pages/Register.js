import React from 'react';

export default function Login() {

  // for later use <form onSubmit={handleSubmit}>

  return (
    <>
      <h1>Please Register</h1>

      <form>
        <input type="text" name="name" id="name" placeholder="name" />
        <input type="text" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password"
        />

        <input type="submit" value="Register" />
      </form>
    </>
  );
}