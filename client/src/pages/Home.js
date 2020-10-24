import React from 'react';
import {Link} from 'react-router-dom';
import useCategories from '../hooks/useCategories.js'

export default function Home() {
  const { state } = useCategories();
  const categories = state.categories.map(category => {
    return (
      <li key={category.category_id} >
        {category.category}
        <br></br>
        {category.category_description}
        <br></br>
        <Link to={`categories/${category.category_id}/services`}>
        <img src={category.category_thumbnail} alt={category.category}/>
        </Link>
        <br></br>
        <br></br>
      </li>
  )});

  return (
    <div className="App" >
      <h2> Select a Category </h2>
      <ul> {categories} </ul>
    </div >
  );
}