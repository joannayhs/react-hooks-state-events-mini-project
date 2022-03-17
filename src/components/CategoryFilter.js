// import React from "react";
// import {v4 as uuid} from 'uuid'

// function CategoryFilter({categories , selectedCategory, onSelectCategory}) {

//   const categoryButtons = categories.map( category => {
//     const className = category === selectedCategory ? "selected" : null
//     return (
//       <button 
//         key={uuid()}
//         className={className}
//         onClick={() => onSelectCategory(category)}>
//           {category}
//           </button>
//     )
//   })

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//       {categoryButtons}
//     </div>
//   );
// }

// export default CategoryFilter;


import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;