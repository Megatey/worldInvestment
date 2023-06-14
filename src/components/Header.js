import React from 'react';
import logo from './img/world-logo-removebg-preview.png'; // Replace with the path to your custom logo file
import './Header.css'; // Replace with the path to your CSS file containing logo styles

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo" className="logo" />
      {/* Additional header content */}
    </header>
  );
}

export default Header;
