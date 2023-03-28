import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
          
            <img src={logo}></img>
            <div>
            <a href="">Order</a>
            <a href="">Review</a>
            <a href="">Manage inventory</a>
            <a href="">Login</a>
            </div>
            
        </nav>
    );
};

export default Header;