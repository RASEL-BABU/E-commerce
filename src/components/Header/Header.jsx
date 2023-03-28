import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
          
            <img src={logo}></img>
            <div>
            <a href="">order</a>
            <a href="">review</a>
            <a href="">manage inventory</a>
            <a href="">Login</a>
            </div>
            
        </nav>
    );
};

export default Header;