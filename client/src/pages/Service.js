import React from 'react';
import { useParams } from "react-router-dom";
import useServiceData from '../hooks/useServiceData'
import Filter from '../components/Filter'
import TaskerList from '../components/TaskerList'

export default function Service() {
  const { id } = useParams();
  const { state, dispatch } = useServiceData(id);
  const { taskers, day, range } = state
  
  const filteredTaskers = taskers.filter(tasker => {
    const validDay = Object.keys(tasker.availability).includes(String(day.getDay()));
    const availableRanges = tasker.availability[day.getDay()]; // an array of arrays
    const validRange = !availableRanges ? '' : availableRanges.filter(elem => {
      return elem[0] <= range[0] && elem[1] >= range[1];
    }).length > 0;
    return validDay && validRange;
  })

  return (
    <>
      <Filter dispatch={dispatch} day={day} range={range} />
      <TaskerList taskers={filteredTaskers} />
    </>
  );
}