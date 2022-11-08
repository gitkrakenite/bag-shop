import React from "react";
import "./header.css";
import { BsBag, BsFillBagCheckFill } from "react-icons/bs";
import { MdPersonOutline } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = ["Home", "Shop", "Collection", "Sale", "Contact"];

const Header = () => {
  return (
    <div id="home" className="headerWrapper">
      <div className="header__logo">
        <BsBag />
      </div>

      <div className="header_navlink">
        {navLinks.map((link, index) => (
          <ul id={index}>
            <li>{link}</li>
          </ul>
        ))}
      </div>

      <div className="header__last">
        <div style={{ cursor: "pointer" }}>
          <MdPersonOutline />
        </div>
        <div style={{ cursor: "pointer" }}>
          <BsFillBagCheckFill /> <sup style={{ fontSize: "11px" }}>2</sup>
        </div>
        <div style={{ cursor: "pointer" }}>
          <GiHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
