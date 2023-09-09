import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {

    const [products,setProducts]=useState([]);

    const[cart,setCart]=useState([])
    

    const handleAddToCart=(product)=>{
        
        const newCart=[...cart,product]
        setCart(newCart)
        addToDb(product.id)
        

    }
    const clearAddCart=()=>{
        setCart([])
        deleteShoppingCart()
    }


    useEffect(()=>{

        fetch(`products.json`)
        .then(res=>res.json())
        .then(data=>setProducts(data))



    },[])
    useEffect(()=>{

        

        // step 1

        const storedCart=getShoppingCart()

        const savedCart=[];
        for(const id in storedCart){
            // get the products using id

            const addedProduct=products.find(product=>product.id===id)
        //  get the quantity 

        
        if(addedProduct){
            const quantity=storedCart[id];
            addedProduct.quantity=quantity
            // step 5 push the quantity

            savedCart.push(addedProduct)
          

        }
       
       



         }
        //  set the cart value
         setCart(savedCart)
  


    },[products])




    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product=><Product
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }

            </div>
            <div className='cart-container'>
               <Cart cart={cart}
                  clearAddCart={clearAddCart}
                    
                >
                   <Link className='procced-link' to='/orders'><button className='btn-procced'>Review Orders</button></Link>
                    
                </Cart>

            </div>
            
        </div>
    );
};

export default Shop;