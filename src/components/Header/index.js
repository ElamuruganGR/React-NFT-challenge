import React from 'react';
import CryptoPunkLogo from "../../assets/header/cryptopunk-logo.png";
import SearchIcon from "../../assets/header/search.png"
import ThemeSwitchIcon from "../../assets/header/theme-switch.png"
import "./styles.css";

export const Header = () => {
  return (
    <div className="header">
        <div className="logo-container">
            <img src={CryptoPunkLogo} alt="Logo" />
        </div>
        <div className="search-container">
          <div className="search-icon-container">
            <img src={SearchIcon} alt="search icon" />
          </div>
          <input type="text" placeholder='search collections, items' />
        </div>
        <nav className="menu-container">
            <div className="menu-items">
              <a href="#" className='menu-item' >Drops</a>
              <a href="#" className='menu-item' >MarketPlace</a>
              <a href="#" className='menu-item' >Create</a>
            </div>
            <div className="actions">
              <div className="theme-switch">
                <img src={ThemeSwitchIcon} alt="theme switch" />
              </div>
              <button>GET IN</button>
            </div>
        </nav>
    </div>
  );
};
