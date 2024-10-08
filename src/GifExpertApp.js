import 'animate.css';
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

  // const categories = ['One Punch Man', 'Samurai x', 'Dragon Ball']
   const [categories, setCategories] = useState(['One Punch Man'])
  
  // const handleAdd = () =>{
  //   setCategories([...categories, ]);
  // }

  return (
    <>
    <h2>GifExpertApp</h2>
    <AddCategory setCategories={setCategories}/>
    <hr />
    {/* <button onClick={handleAdd}>Agregar</button> */}
    <ol>
      {
        categories.map(category => 
        <GifGrid 
        key={category}
        category={category}/>
      )
      }
    </ol>

    </>
  )};

  export default GifExpertApp;
  