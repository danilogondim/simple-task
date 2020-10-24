import React from 'react';
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
        <img src={category.category_thumbnail} alt={category.category}/>
        <br></br>
        <br></br>
      </li>
  )});

  return (
    <div className="App" >
      <h2> Categories </h2>
      <ul> {categories} </ul>
    </div >
  );
}