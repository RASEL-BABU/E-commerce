import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import  './Product.css'

const Product = (props) => {
    

    const  {img,price, ratings,seller,name,stock}=props.product;

    const handleAddToCart=props.handleAddToCart;
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
            
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
                add to cart<FontAwesomeIcon icon={faShoppingCart} />
                </button>
            
            

            
        </div>
    );
};

export default Product;