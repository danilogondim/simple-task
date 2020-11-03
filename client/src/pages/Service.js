import React, { useState } from 'react';
import { useParams } from "react-router-dom";
import useServiceData from '../hooks/useServiceData';
import Filter from '../components/Filter';
import TaskerList from '../components/TaskerList';
import TaskerDetail from '../components/TaskerDetail';
import taskersFilter from '../helpers/taskersFilter';
import { SET_TASKER } from '../reducer/data_reducer';
import './Service.scss';
import { CircularProgress } from '@material-ui/core';
import { Jumbotron, Container } from 'react-bootstrap';
import { FilterList } from '@material-ui/icons';



export default function Service(props) {
  const { c_id, id } = useParams();
  const { state, dispatch, service } = useServiceData(c_id, id);
  const { day, range, tasker } = state;
  localStorage.setItem('category_id', c_id);
  localStorage.setItem('service_id', id);
  localStorage.setItem("service_name", service.service);
  const { socket } = props;
  const [filterActive, setFilterActive] = useState(true);

  const filteredTaskers = taskersFilter(state);

  const handleFilter = () => {
    if (filterActive) {
      setFilterActive(false)
    } else {
      setFilterActive(true)

    }
  }

  const [filter, setFilter] = useState('rating')
  const handleClick = () => {
    if (filter === 'rating') {
      setFilter('price');
    } else {
      setFilter('rating');
    }
  };

  return (
    <div className="App" >
      <Container className="p-3">
        {state.loading && (
          <div className="loading">
            <h3>Loading...</h3>
            <CircularProgress />
          </div>
        )}
        {!tasker && !state.loading && (
          <main className="selection_page">
            <Jumbotron className="p-3 mb-2 jumbotron">
              <h4>{service.service + " >> "}Select a Tasker</h4>
            </Jumbotron>
            <div className="sort-criteria">
              <h5>Sorted By:</h5>
              <button onClick={handleClick}>{filter}</button>
            </div>
            <div className="filter-tasker__list">
              <section className="filter">
                <button className="toggle-filter" onClick={handleFilter}><FilterList /></button>
                {filterActive && <Filter dispatch={dispatch} day={day} range={range} />}
              </section>
              {/* commented out to test layout */}
              {<TaskerList dispatch={dispatch} service={service} taskers={filteredTaskers} filter={filter} />}
              {/* {<TaskerList dispatch={dispatch} service={service} taskers={state.taskers} filter={filter}/>} */}
            </div>
          </main>
        )}
        {tasker && (
          <main className="detail_page" onClick={() => dispatch({ type: SET_TASKER, tasker: null })}>
            <TaskerDetail tasker={tasker} day={day} socket={socket} service={service} />
          </main>
        )}
      </Container>
    </div>

  );
}