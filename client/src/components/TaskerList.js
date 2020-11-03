import React, { useState } from 'react';
import { SET_TASKER } from '../reducer/data_reducer';
import './TaskerList.scss';

import TaskerListItem from './TaskerListItem';

export default function TaskerList(props) {

  const { taskers, filter } = props;

   const handleFilter = {
    'rating': 'average_rating',
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
        setTasker={() => props.dispatch({ type: SET_TASKER, tasker: tasker })}
      />
    );
  });

  return (
    <section className="taskers">
       <ul className="taskers__list">
        {taskerList.length === 0 &&
          <>
            <div className="alert alert-primary">
              <h2>Unfortunately, there is no match for your search.</h2>
              <br />
              <h4>That is probably because all our taskers are busy for the selected date and period.</h4>
              <br />
              <h4>Please try a different one if it still suits your needs.</h4>
            </div>
          </>
        }
        {taskerList.length > 0 && taskerList}

      </ul>
    </section>
  );
};