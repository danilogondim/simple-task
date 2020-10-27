import React from 'react';
import { useParams } from "react-router-dom";
import useServiceData from '../hooks/useServiceData';
import Filter from '../components/Filter';
import TaskerList from '../components/TaskerList';
import TaskerDetail from '../components/TaskerDetail';
import taskersFilter from '../helpers/taskersFilter';
import { SET_TASKER } from '../reducer/data_reducer';
import './Service.scss';

export default function Service() {
  const { c_id, id } = useParams();
  const { state, dispatch, service } = useServiceData(c_id, id);
  const { day, range, tasker } = state;

  const filteredTaskers = taskersFilter(state);

  return (
    <>
      <main className="selection_page">
        {!tasker && <Filter dispatch={dispatch} day={day} range={range} />}
        {!tasker && <TaskerList dispatch={dispatch} service={service} taskers={filteredTaskers} />}
        {tasker && <TaskerDetail tasker={tasker} setTasker={() => dispatch({ type: SET_TASKER, tasker: null })} />}
      </main>
    </>
  );
}