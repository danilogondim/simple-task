import React from 'react';
import './TaskerList.scss';

import TaskerListItem from './TaskerListItem';

export default function TaskerList(props) {
  const taskers = !props.taskers ? "" : props.taskers.map(tasker => {
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
        <button>price/ratings</button>
      </div>
      <h4 className="taskers__header text--light">Select a Tasker</h4>
      <ul className="taskers__list">
        {taskers}
      </ul>
    </section>
  );
};