import React from 'react'
import '../Category.css';

const Professions = ({profession}) => {
  return (
   <div className='section-center'>
     {profession.map((item) =>{
      const {id, name, profession, image, description} = item;
      return <article key={id} className ="menu-item">
       <img src={image} alt={name} className ='photo' />

       <div className='item-info'>
              <header>
                <h4>{name}</h4>
                <h4 className='price'>{profession}</h4>
              </header>
              <p className='item-text'>{description}</p>
            </div>
      </article>
     })}
   </div>
  )
}

export default Professions
