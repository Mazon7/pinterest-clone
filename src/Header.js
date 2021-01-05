import React from 'react';
import './Header.css';


function Header() {
  return (
    <div className="app__header">
      <div className="header__wrapper">
        <div className="header__logo">
          <p>Logo</p>
        </div>  
        <div className="header__button homePage">
          <p>HomePage</p>
        </div>
        <div className="header__button following">
          <p>Following</p>
        </div>
        <div className="header__search">
          <div className="header__searchContainer">
              <input type="text"/>
          </div>
        </div>
        <div className="header__menuItems">
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
          <p>icon</p>
        </div>
      </div>       
    </div>
  )
}

export default Header
