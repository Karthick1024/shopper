/* eslint-disable no-unused-vars */
import React, { useContext } from 'react'
import {Shopcontext} from '../context/Shopcontext'
import {useParams} from 'react-router-dom'
import Breadcrum from '../components/breadcrum/Breadcrum';
import Productdisplay from '../components/Productdisplay/Productdisplay';
import Description from '../components/description/Description';
import Relatedproducts from '../components/Relatedproducts/Relatedproducts';


export const Product = () => {
  const {all_product} = useContext(Shopcontext);
  const {productId} = useParams();
  const product = all_product.find((e)=>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <Productdisplay product={product}/>
      <Description/>
      <Relatedproducts/>
    </div>
  )
}
export default Product