import React from 'react';
import { useParams } from "react-router-dom";
import useTaskers from '../hooks/useTaskers'
import Filter from '../components/Filter'
import TaskerList from '../components/TaskerList'

export default function Service() {
  const { id } = useParams();
  const { state } = useTaskers(id);
  return (
    <>
      <Filter />
      <TaskerList taskers={state.taskers}/>
    </>
  );
}