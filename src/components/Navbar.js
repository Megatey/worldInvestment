import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavDrop from "./NavDrop";

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="nav-wrap">
      <div className="nav1">
        <span className="span1-nav1">
          <img src="../img/world-logo-removebg-preview.png" alt="logo"></img>
          &nbsp;&nbsp;
          <span className="b-name">World International Investment Plc</span>
        </span>
        <span className="nav2-div">
          <Link to={"/privacy-notices"}>
            {" "}
            <span className="nav2-spans nss nav2-spns">Privacy Notices</span>
          </Link>
          <Link to={"/terms-condition"}>
            {" "}
            <span className="nav2-spans nss nav2-spns">Terms & Conditions</span>
          </Link>
          <Link to={"/about-us"}>
            {" "}
            <span className="nav2-spans nss nav2-spns">About Us</span>
          </Link>

          <Link to={"/contact-us"}>
            {" "}
            <span className="nav2-spans nss nav2-spns">
              <i class="fa-solid fa-envelope-open-text"></i>
              &nbsp;&nbsp;&nbsp;&nbsp;Feed Backs
            </span>
          </Link>
        </span>
        <div className="show-nav">
          <span>
            {" "}
            <input
              type="checkbox"
              id="checkbox"
              onClick={toggleNav}
        className={isNavOpen ? 'active' : ''}
     / >
            <label for="checkbox" class="toggle">
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
          </span>
        </div>
              </div>

      <div className="nav2">
        <span className="nav2-div">
          <a href="#home">
            {" "}
            <span className="nav2-spans nav2-span1">Home</span>
          </a>
          <a href="#testify">
            <span className="nav2-spans nvs">Featured Content</span>
          </a>
          <a href="#help">
            {" "}
            <span className="nav2-spans nvs">Help</span>
          </a>
          <a href="#story">
            {" "}
            <span className="nav2-spans nvs">CEO Speech</span>
          </a>
        </span>
        <span className="span2-nav1 s2n1">
          <i class="fa-solid fa-magnifying-glass"></i>
        </span>
      </div>
      {isNavOpen && <NavDrop/>}
    </div>
  );
};

export default Navbar;
