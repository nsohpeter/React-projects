import React from 'react';
import '../Category.css';

const Categories = ({filterBtn, Categories}) => {
  return (
    <div className='btn-container'>
      {Categories.map((category, index) =>{
        return <button
              type='button'
              className='filter-btn'
              key={index}
              onClick ={() =>filterBtn(category)}
            >
             {category}
        </button>
      })}
    </div>
  )
}

export default Categories
