import React from "react";
import Story from "./Story";
import Interest from "./Interest";
import SideBar from "./SideBar";
import TopBtn from "./TopBtn";
import { Link } from "react-router-dom";
const OurHeritage = () => {
  return (
    <div className="about-us pad-top">
      <div className="about-us-div">
        <div className="about-us-div-header">
        <Link to={'/'}>   <span className="about-us-div-header-span">Home </span></Link>
          <span> > </span>
          <Link to={'/about-us'}>   <span className="about-us-div-header-span">About Us</span></Link>
          <span> > </span>
          <Link to={'/our-heritage'}>   <span className="about-us-div-header-span">Heritage</span></Link>
        </div>
        <div className="about-us-div-header-img m-img">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1>Heritage</h1>
            Tracing Shell’s history takes you on a journey from London to Asia,
            from the birth of the motor car to the development of sustainable
            fuels. It is a history of exploration, innovation and a pioneering
            spirit that still guides Shell to this day.
          </span>
        </div>
        <div className="text-note display-none"><h1>Heritage</h1>
            Tracing Shell’s history takes you on a journey from London to Asia,
            from the birth of the motor car to the development of sustainable
            fuels. It is a history of exploration, innovation and a pioneering
            spirit that still guides Shell to this day.</div>
      </div>{" "}
      <div className="menu">
        <span className="menu-span">
          <div className="menu-img"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2">Brief History</h2>WORLD INTERNATIONAL
            INVESTMENT PETROLEUM COMPANY, 47 others set to lift Nigeria’s crude
            oil
            <br /> <span className="underline udl">Learn more</span>
          </div>
        </span>
        <span className="menu-span">
          <div className="menu-img mi-2"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2">Board Member</h2>
            The World International Investment petroleum company plc Executive
            Committee, led by Rt Capt. Charles Onuoha. Bsc/MSC. Electrical Engr
            & strategy management. (CEO), is responsible for running WIIPC’s
            businesses and delivering on its corporate strategy.
            <br /> <span className="underline udl">Read more</span>
          </div>
        </span>
        <span className="menu-span">
          <div className="menu-img mi-img"></div>
          <div className="menu-img-content">
            <h2> Our major projects</h2>
            World International Investment Plc’s major projects show our
            technology and expertise in action.
            <br /> <span className="underline udl">Learn more</span>
          </div>
        </span>
      </div>
      <Story />
      <Interest />
      <SideBar />
      <TopBtn />
    </div>
  );
};

export default OurHeritage;
