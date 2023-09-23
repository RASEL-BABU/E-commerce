import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/Authprovider';

const Header = () => {
    const hundleLogout=()=>{

    }

    const {LogOut,user}=useContext(AuthContext)
    console.log(user)
    return (
        <nav className='header'>
          
            <img src={logo}></img>
            <div>

            <Link to="/">Shop</Link> 
            <Link to="/orders">Orders</Link>
            <Link to="/inventory">Inventory</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
           
            {
                user&& <span>Welcome{user.email}<button onClick={hundleLogout}>Logout</button>:<Link to='/login'></Link>Login</span>
            }
            </div>
            
        </nav>
    );
};

export default Header;