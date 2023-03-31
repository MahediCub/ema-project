import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, name, seller, ratings, price} = props.product;
    return (
        <div className='product'>
           <img src={img} alt="product" />
          <div className='product-info'>
          <h3 className='product-name'>{name}</h3>
           <p>Price:${price}</p>
           <p>Manufacturer:{seller}</p>
           <p className='rating'>Rating:{ratings} Stars</p>
          </div>
          <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;