import React from 'react';
import './Header.css'
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
            <a href="/SHOP">SHOP</a>
            <a href="/ORDER">ORDER</a>
            <a href="/INVENTORY">INVENTORY</a>
            <a href="/LOGIN">LOGIN</a>
            </div>
            
        </nav>
    );
};

export default Header;