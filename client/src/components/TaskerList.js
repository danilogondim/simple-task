import React, { useState } from 'react';
import './TaskerList.scss';

import TaskerListItem from './TaskerListItem';

export default function TaskerList(props) {

  const { taskers, service } = props;

  const [filter, setFilter] = useState('rating')
  const handleClick = () => {
    if (filter === 'rating') {
      setFilter('price');
    } else {
      setFilter('rating');
    }
  };

  const handleFilter = {
    'rating': 'user_rating',
    'price': 'hourly_rate'
  }


  const taskerList = !taskers ? "" : [...taskers].sort((a, b) => {
    // if the filter criteria is price, return the lowest prices first
    if (filter === 'price') {
      return Number(a[handleFilter[filter]]) - Number(b[handleFilter[filter]]);
    }
    // if the criteria is rating, then return by rating (price if the rating is the same)
    if (Number(b[handleFilter[filter]]) === Number(a[handleFilter[filter]])) {
      return Number(a['hourly_rate']) - Number(b['hourly_rate'])
    }
    return Number(b[handleFilter[filter]]) - Number(a[handleFilter[filter]]);
  }).map(tasker => {
    return (
      <TaskerListItem
        key={tasker.id}
        tasker={tasker}
      />
    );
  });

  return (
    <section className="taskers">
      <div className="sort">
        <h5>Sorted By: </h5>
        <button onClick={handleClick}>{filter}</button>
      </div>
      <h4 className="taskers__header text--light">{service.service + " >> "}Select a Tasker</h4>
      <ul className="taskers__list">
        {taskerList}
      </ul>
    </section>
  );
};