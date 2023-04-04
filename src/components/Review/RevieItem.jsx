import React from 'react';
import './Revie.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const RevieItem = ({product,hundleRemoveFromCart}) => {
   const { id,img,quantity,name,price}=product;
    return (
        <div className='revie-item'>
          <img src={img}></img>
          <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>Price:<span className='text-color'>{price}</span></p>
            <p>quantity<span className='text-color'>{quantity}</span></p>
          </div>
          <button onClick={()=>hundleRemoveFromCart(id)} className='btn-delete'><FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default RevieItem;