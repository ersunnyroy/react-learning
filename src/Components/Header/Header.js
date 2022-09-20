import React from 'react';
import logo from '../../logo.png';
import Navigation from '../Navigation/Navigation.js';


const Header = () => {
  return (
      <>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Navigation />
      </header>
      </>
  );
}

export default Header;
