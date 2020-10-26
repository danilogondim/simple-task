import React from 'react';
import { useParams } from "react-router-dom";
import useServiceData from '../hooks/useServiceData'
import Filter from '../components/Filter'
import TaskerList from '../components/TaskerList'
import taskersFilter from '../helpers/taskersFilter'

export default function Service() {
  const { id } = useParams();
  const { state, dispatch } = useServiceData(id);
  const { day, range } = state

  const filteredTaskers = taskersFilter(state);

  return (
    <>
      <Filter dispatch={dispatch} day={day} range={range} />
      <TaskerList taskers={filteredTaskers} />
    </>
  );
}