import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <div>
        <span className="header" onClick={()=>window.scroll(0,0)} >CHOOSE YOUR POKEMON</span>
    </div>
  )
}

export default Header