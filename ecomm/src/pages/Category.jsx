/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import './css/category.css'
import {Shopcontext} from '../context/Shopcontext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/item/Item'


export const Category = (props) => {

  const {all_product} = useContext(Shopcontext);

  return (
    <div>
      <div className="shop-category container-fluid">
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexsort ">
          <p>
            <span>Showing 1-12</span>   out of 36 Products
          </p>
          <div className="shopcategory-sort">
            Sort by <img src={dropdown_icon} alt="" />
          </div>
        </div>
        <div className="shopcategory-products mt-5">
          {all_product.map((item,i)=>{
            if (props.category === item.category){
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            }
            else{
              return null
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          Explore More
        </div>
      </div>
    </div>
  )
}
