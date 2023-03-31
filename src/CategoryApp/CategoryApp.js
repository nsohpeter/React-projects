import React, { useState } from 'react'
import '../index.css';
import './Category.css';
import professionalData from './CategoryData';
import Professions from './Components/Professions';
import Categories from './Components/Categories';


const allCategories = ["all", ...new Set(professionalData.map((item)=>item.category))]

const CategoryApp = () => {
const [profession, setProfession] = useState(professionalData)
const [category, setCategory]= useState(allCategories)

const filterBtn = (category)=>{

  if(category === "all"){
    setProfession(professionalData)
    return
  }
 const newCategory = professionalData.filter((item) => item.category === category)
 setProfession(newCategory)
}

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
         <h3>this is Category app</h3>
         <div className='underline'></div>
        </div>
         <Categories
         Categories = {category} 
         filterBtn = {filterBtn}
         />
         <Professions 
         profession = {profession}
         />

      </section>
      
    </main>
  )
}

export default CategoryApp
