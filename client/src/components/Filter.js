import React from 'react';

export default function Filter() {
  return (
    <section className="filter" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <h4>Location: </h4>
      <input type='search'></input>
      <h4>Date</h4>
      <input type='date'></input>
      <h4>Time: </h4>
      <input type='time'></input>
    </section>
  )
};