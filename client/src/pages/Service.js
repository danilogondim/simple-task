import React from 'react';
import { useParams } from "react-router-dom";
import useServiceData from '../hooks/useServiceData';
import useCategories from '../hooks/useCategories';
import Filter from '../components/Filter';
import TaskerList from '../components/TaskerList';
import taskersFilter from '../helpers/taskersFilter';
import './Service.scss';

export default function Service() {
  const { c_id, id } = useParams();
  const { state, dispatch } = useServiceData(id);
  const categories = useCategories();
  const category = categories.state.categories.find(element => element.category_id === Number(c_id))
  const service = !category? "": category.services.find(element => element.service_id === Number(id));
  const { day, range } = state;



  const filteredTaskers = taskersFilter(state);

  return (
    <>
      <main className="selection_page">
        <Filter dispatch={dispatch} day={day} range={range} />
        <TaskerList service={service} taskers={filteredTaskers} />
      </main>
    </>
  );
}