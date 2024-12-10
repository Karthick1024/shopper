import React, { useEffect, useState } from 'react';
import './listproduct.css';
import cross_icon from '../../Admin_Assets/cross_icon.png';

const Listproduct = () => {
  const url = 'https://shopper-backend-26t2.onrender.com';

  const [allproducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);  // For loading state
  const [error, setError] = useState('');  // For error handling

  // Fetch all products from backend
  const fetchInfo = async () => {
    try {
      const res = await fetch(`${url}/allproducts`);
      if (!res.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await res.json();
      console.log(data);  // Check the response to make sure the image URL is correct
      setAllProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  // Remove product from the list
  const remove_product = async (id) => {
    try {
      const res = await fetch(`${url}/removeproduct`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: id }),
      });

      if (!res.ok) {
        throw new Error('Failed to remove product');
      }

      // Remove product locally after successful deletion
      setAllProducts(allproducts.filter(product => product.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return <div>Loading products...</div>;
  }

  return (
    <div className='list-product'>
      <h1>All Products List</h1>
      {error && <p className="error">{error}</p>}
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
        {allproducts.length === 0 ? (
          <p>No products available.</p>
        ) : (
          allproducts.map((product) => (
            <div key={product.id} className="list-product-format-main listproduct-format">
              {/* Check if the image URL exists */}
              <img 
                src={product.image || 'path/to/default-image.jpg'}  // Fallback image
                className='listproduct-product-icon' 
                alt={product.name} 
              />
              <p>{product.name}</p>
              <p>{product.old_price}</p>
              <p>{product.new_price}</p>
              <p>{product.category}</p>
              <p>{product.description}</p>
              <img 
                onClick={() => remove_product(product.id)} 
                src={cross_icon} 
                className='listproduct-remove-icon' 
                alt="Remove product"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Listproduct;
