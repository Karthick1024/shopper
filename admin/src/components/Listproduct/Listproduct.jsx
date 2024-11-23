/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import './listproduct.css'
import cross_icon from '../../Admin_Assets/cross_icon.png'

const Listproduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res) => res.json())
    .then((data) => { setAllProducts(data) });
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const remove_product = async (id) => {
    await fetch('http://localhost:4000/removeproduct',{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      <div className="list-product-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Description</p>
        <p>Remove</p>
      </div>
      <div className="list-product-allproducts">
        <hr />

      {allproducts.map((product,index)=>{
        return <> <div key={index} className="list-product-format-main listproduct-format">
          <img src={product.image} className='listproduct-product-icon' alt="" />
          <p>{product.name}</p>
          <p>{product.old_price}</p>
          <p>{product.new_price}</p>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <img onClick={()=>{remove_product(product.id)}} src={cross_icon} className='listproduct-remove-icon' alt="" />
        </div>
        <hr />
        </>
        
      })}
      </div>
    </div>
  )
}

export default Listproduct