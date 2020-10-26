import React from 'react';
import { useParams } from "react-router-dom";
import useServiceData from '../hooks/useServiceData'
import Filter from '../components/Filter'
import TaskerList from '../components/TaskerList'

export default function Service() {
  const { id } = useParams();
  const { state, dispatch } = useServiceData(id);

  return (
    <>
      <Filter dispatch={dispatch}/>
      <TaskerList taskers={state.taskers}/>
    </>
  );
}