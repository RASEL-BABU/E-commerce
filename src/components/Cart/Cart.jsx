import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    
   

    const {cart,clearAddCart}=props;
   
   

    let totalprice=0;
    let quantity=0;
 let shipping=0;
    for (const product of cart){
        product.quantity=product.quantity||1;
       
         totalprice=totalprice+product.price*product.quantity
        shipping=shipping+product.shipping;
        quantity=quantity+product.quantity

    }
  const  tax=totalprice*7/100;
  const grandTotal=tax+shipping+totalprice;

    return (
        <div className='cart'>
             <h4>Order Summary</h4>
                <p>Total Order:{quantity}</p>
                <p>Total Price:{totalprice}</p>
                <h6>Total Shipping Charge:{shipping}</h6>
                <h6>Tax:{tax}</h6>
                <h5>Grand Total:${grandTotal}</h5>
                <button className='btn-clr'onClick={clearAddCart}> <span>clear cart</span>
                <FontAwesomeIcon className='' icon={faTrashAlt} />
                   </button>

        </div>
    );
};

export default Cart;