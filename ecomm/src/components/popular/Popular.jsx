 
// import React from 'react'
import './popular.css'
// import data_product from '../Assets/data'
import Item from '../item/Item'
import { useEffect, useState } from 'react'

const Popular = () => {
  const [popularproducts,setPopularproducts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/popularinwomen').then((response)=>response.json()).then((data)=>setPopularproducts(data));
  },[])
  
  return (
    <div className='mt-5' >
    <div className="popular mt-5">
      <h1>POPULAR IN WOMEN</h1> 
      <hr />
      <div className="popular-item">
        {popularproducts.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
    </div>
  )
}

export default Popular
