import React from 'react';
import './Cart.css'

const Cart = (props) => {

    
   

    const {cart}=props;
   
   

    let totalprice=0;
 let shipping=0;
    for (const product of cart){
       
         totalprice=totalprice+product.price;
        shipping=shipping+product.shipping;

    }
  const  tax=totalprice*7/100;
  const grandTotal=tax+shipping+totalprice;

    return (
        <div className='cart'>
             <h4>Order Summary</h4>
                <p>Total Order:{cart.length}</p>
                <p>Total Price:{totalprice}</p>
                <h6>Total Shipping Charge:{shipping}</h6>
                <h6>Tax:{tax}</h6>
                <h5>Grand Total:${grandTotal}</h5>

        </div>
    );
};

export default Cart;