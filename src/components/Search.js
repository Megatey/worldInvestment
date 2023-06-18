import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import SideBar from "./SideBar";
import TopBtn from "./TopBtn";

const Search = () => {
  const [isVisible, setIsVisible] = useState(false);

  const listenToScroll = () => {
    let heightToHideFrom = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      !isVisible && //
        setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  });
  return (
    <div className="about-us pad-top">
      <div className="about-us-div">
        <div className="about-us-div-header">
          <span className="display-none"> {"<"}</span>
          <Link to={"/"}>
            {" "}
            <span className="about-us-div-header-span">Home </span>
          </Link>
          <span className="display-none-reverse"> {">"}</span>
          <Link to={"/about-us"}>
            {" "}
            <span className="about-us-div-header-span display-none-reverse">
              Search
            </span>
          </Link>
        </div>
        <div className="mid mid-pad">
          <h1> Search</h1>
          <br />
          <span>
            <input type="search" />
            
            <button>
              {" "}
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </span>
        </div>
      </div>
      <Menu />
      <SideBar />
      {isVisible && <TopBtn />}
    </div>
  );
};

export default Search;
