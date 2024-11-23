/* eslint-disable react/prop-types */

import PropTypes from "prop-types"
// import React from 'react'
import './item.css'
import { Link } from "react-router-dom";

export const Item = (props) => {
  return (
    <div className="item">
       <Link to={`/product/${props.id}`}> <img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
        <p>{props.name}</p>
        <div className="items-prices">
          <div className="item-price-new">
          ₹{props.new_price}
          </div>
          <div className="item-price-old">
            {props.old_price}
          </div>
        </div>
    </div>
  )
}
Item.propTypes = {
  image:PropTypes.string,
  name:PropTypes.string,
  new_price:PropTypes.number,
  old_price:PropTypes.number


}

export default Item