import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import cartProductsLoader from '../loaders/cartProductsLoader';
import { useLoaderData } from 'react-router-dom';
import RevieItem from '../Review/RevieItem';
import './Orders.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart=useLoaderData();
    const [cart,setCart]=useState(savedCart)
    const hundleRemoveFromCart=(id)=>{
       const remaining=cart.filter(product=>product.id!==id)
       setCart(remaining)
       removeFromDb(id)

    }

    const clearAddCart=()=>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
        <div className='revie-container'>
           {
            cart.map(product=><RevieItem
                 key={product.id}
            product={product}
            hundleRemoveFromCart={hundleRemoveFromCart}>

                
            </RevieItem>)
           }
            </div>
            <div className='cart-container'>
            <Cart cart={cart}clearAddCart={clearAddCart}></Cart>
            </div>
            </div>
    );
};

export default Orders;