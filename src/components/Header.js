import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuHandler = () => setMenuOpen(!menuOpen);

  return (
    <div className="header">
      <div
        className={`header__menu ${menuOpen ? "active" : ""}`}
        onClick={menuHandler}
      >
        <span></span>
      </div>
      <div className="header__cart">
        <img src="/cart.svg" alt="" />
      </div>
    </div>
  );
};

export default Header;
