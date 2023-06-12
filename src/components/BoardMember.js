import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Story from "./Story";
import { Link } from "react-router-dom";
const BoardMember = () => {
    AOS.init({
      duration: 1200,
    })
    

  
  return (
    <div className="about-us pad-top">
      <div className="about-us-div"> 
        <div className="about-us-div-header">
        <Link to={'/'}>  <span className="about-us-div-header-span">Home </span></Link>
          <span> > </span>
          <Link to={'/about-us'}>   <span className="about-us-div-header-span">About Us</span></Link>
          <span> > </span>
          <Link to={'/our-heritage'}>   <span className="about-us-div-header-span">Heritage</span></Link>
          <span> > </span>
          <span className="about-us-div-header-span">Board Member</span>
        </div>
        <div className="mid" data-aos="slide-up"> 
        <h1>EXECUTIVE COMMITTEE</h1> The Shell plc Executive Committee operates under
          the direction of the Chief Executive Officer and is responsible for
          Shell’s overall business and affairs. </div><div className="text-note">The Chief Executive Officer has
          final authority in all matters of management that are not within the
          duties and authorities of the Board or of the shareholders’ general
          meeting. The Executive Committee supports the Chief Executive Officer
          and implements all Board resolutions and supervises all management
          levels in Shell.
        </div>
      </div>
      <div className="menus">
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
<Story/>
    </div>
  );
};

export default BoardMember;
