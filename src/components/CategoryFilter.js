import React from "react";
import {v4 as uuid} from 'uuid'

function CategoryFilter({categories , selectedCategory, onSelectedCategory}) {


  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map( category => {
        const className = category === selectedCategory ? "selected" : '' 
        return <button key={uuid()} onClick={() => onSelectedCategory(category)} className={className}>{category}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
