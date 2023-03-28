import React from 'react';
import  './Product.css'

const Product = (props) => {

    const  {img,price, ratings,seller,name,stock}=props.product;
    return (
        <div className='product'>
            <img src={img}></img>
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>Seller:{seller}</p>
            <p>Price:${price}</p>
            <p>Ratings:{ratings}</p>
            <p>Stock:{stock}</p>
            </div>
            <button className='btn-cart'>add to cart</button>
            
            

            
        </div>
    );
};

export default Product;