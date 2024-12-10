import React, { useState } from 'react';
import './addproduct.css';
import upload_area from '../../Admin_Assets/upload_area.svg';

const Addproduct = () => {
    const url = 'https://shopper-backend-26t2.onrender.com';
    const [image, setImage] = useState(null);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "",
        new_price: "",
        old_price: "",
        description: '',
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const imageHandler = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage && selectedImage.type.startsWith('image/')) {
            setImage(selectedImage);
        } else {
            setError('Please upload a valid image file.');
        }
    };

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };

    const addProduct = async () => {
        if (!image || !productDetails.name || !productDetails.category) {
            setError('Please fill in all fields and upload an image.');
            return;
        }
        
        if (isNaN(productDetails.old_price) || isNaN(productDetails.new_price)) {
            setError('Please enter valid numbers for prices.');
            return;
        }

        setError('');
        setLoading(true);
        try {
            // Upload image
            const formData = new FormData();
            formData.append('product', image);

            const imageResponse = await fetch(`${url}/upload`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: formData,
            });

            if (!imageResponse.ok) {
                const errorText = await imageResponse.text();
                setError(`Failed to upload image: ${errorText}`);
                setLoading(false);
                return;
            }

            const imageData = await imageResponse.json();
            if (!imageData.success) {
                setError('Failed to upload image');
                setLoading(false);
                return;
            }

            // Add product details
            const product = { ...productDetails, image: imageData.image_url };

            const productResponse = await fetch(`${url}/addproduct`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            const productData = await productResponse.json();
            if (productData.success) {
                alert('Product added successfully');
                setProductDetails({
                    name: "",
                    image: "",
                    category: "",
                    new_price: "",
                    old_price: "",
                    description: '',
                });
                setImage(null); // Reset image preview
            } else {
                setError('Failed to add product');
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='add-product'>
            {error && <p className="error">{error}</p>}
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name='name'
                    placeholder='Type here'
                />
            </div>
            <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="text"
                        name='old_price'
                        placeholder='Type Here'
                    />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="text"
                        name='new_price'
                        placeholder='Type Here'
                    />
                </div>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select
                    value={productDetails.category}
                    onChange={changeHandler}
                    name="category"
                    className='add-product-selector'
                >
                    <option value="" disabled>Select Category</option>
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kid</option>
                </select>
            </div>
            <div className="addproduct-itemfield">
                <p>Product Description</p>
                <textarea
                    value={productDetails.description}
                    onChange={changeHandler}
                    name="description"
                    placeholder="Enter the product description here"
                    rows="4"
                    cols="50"
                />
            </div>
            <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img
                        src={image ? URL.createObjectURL(image) : upload_area}
                        alt="Upload Preview"
                        className='addproduct-thumbnail-img'
                    />
                </label>
                <input
                    onChange={imageHandler}
                    type="file"
                    name='image'
                    id='file-input'
                    hidden
                />
            </div>
            <button
                onClick={addProduct}
                className='add-product-button'
                disabled={loading}
            >
                {loading ? 'Adding...' : 'ADD'}
            </button>
        </div>
    );
};

export default Addproduct;
