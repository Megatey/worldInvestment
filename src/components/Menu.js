import React from "react";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <div className="menu">
     <Link to={'/history'}> <span className="menu-span">
        <div className="menu-img"></div>
        <div className="menu-img-content">
          <h2 className="menu-span-h2">Brief History</h2>WORLD INTERNATIONAL
          INVESTMENT PETROLEUM COMPANY, 47 others set to lift Nigeria’s crude
          oil
          <br /> <span className="underline udl">Learn more</span>
        </div>
      </span></Link>
      <Link to={'/board-member'}> <span className="menu-span">
        <div className="menu-img mi-2"></div>
        <div className="menu-img-content">
          <h2 className="menu-span-h2">Board Member</h2>
          The World International Investment petroleum company plc Executive
          Committee, led by Rt Capt. Charles Onuoha. Bsc/MSC. Electrical Engr &
          strategy management. (CEO), is responsible for running WIIPC’s
          businesses and delivering on its corporate strategy.
          <br /> <span className="underline udl">Read more</span>
        </div>
      </span></Link>
      <Link to={'/about-us'}> <span className="menu-span">
        <div className="menu-img mi-3"></div>
        <div className="menu-img-content">
          <h2>About Us</h2>
          World International Investment Plc is a global group of energy and petrochemical companies that
          aims to meet the world’s growing need for more and cleaner energy
          solutions in ways that are economically, environmentally and socially
          responsible.
          <br /> <span className="underline udl">Learn more</span>
        </div>
      </span></Link>
    </div>
  );
};

export default Menu;
