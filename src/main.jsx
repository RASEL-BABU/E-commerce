import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import cartProductsLoader from './components/loaders/cartProductsLoader';
import Checkout from './components/Checkout/Checkout';
import SignUp from './components/SignUp/SignUp';
import Authprovider from './components/providers/Authprovider';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children:[
      {
      path:'/',
      element:<Shop></Shop>,
  

    },
    {
      path:'checkout',
      element:<Checkout></Checkout>

    },
    {
      path:'orders',
      element:<Orders></Orders>,
      loader:cartProductsLoader
    },
    {
      path:'inventory',
      element:<Inventory></Inventory>,
    },
    {
      path:'login',
      element:<Login></Login>,
    },
    {
      path:'signup',
      element:<SignUp></SignUp>
    }


    
  ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Authprovider>
  <RouterProvider router={router} />
  </Authprovider>
  </React.StrictMode>,
)
