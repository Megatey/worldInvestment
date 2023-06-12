import React from "react";
import Interest from "./Interest";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import Heritage from "./Heritage";
import { Link } from "react-router-dom";
const WhoWeAre = () => {
  return (
    <div className="about-us pad-top">
      <div className="about-us-div">
        <div className="about-us-div-header">
        <Link to={'/'}>     <span className="about-us-div-header-span">Home </span></Link>
          <span> > </span>
          <Link to={'/about-us'}>   <span className="about-us-div-header-span">About Us</span></Link>
          <span> > </span>
          <span className="about-us-div-header-span">Who We Are</span>
        </div>
        <div className="about-us-div-header-img are">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1> WHO WE ARE</h1>
            Shell is an international energy company with expertise in the
            exploration, production, refining and marketing of oil and natural
            gas, and the manufacturing and marketing of chemicals. We use
            advanced technologies and take an innovative approach to help build
            a sustainable energy future. We invest in power, including from
            renewable sources such as wind and solar. We also invest in electric
            vehicle charging and low-carbon fuels for transport, such as
            advanced biofuels and hydrogen.
          </span>
        </div>
        <div className="text-note display-none"><h1> WHO WE ARE</h1>
            Shell is an international energy company with expertise in the
            exploration, production, refining and marketing of oil and natural
            gas, and the manufacturing and marketing of chemicals. We use
            advanced technologies and take an innovative approach to help build
            a sustainable energy future. We invest in power, including from
            renewable sources such as wind and solar. We also invest in electric
            vehicle charging and low-carbon fuels for transport, such as
            advanced biofuels and hydrogen.</div>
        <div className="text-note tn-note">
          <span className="span-width">
            Shell was formed in 1907, although our history can be traced back to
            the first half of the 19th century.<br/>The Chief Executive Officer is Wael Sawan.
          </span>

          <span>
            <h2> Our purpose </h2>Shell’s
            purpose is to power progress together by providing more and cleaner
            energy solutions. We believe that rising standards of living for a
            growing global population are likely to continue to drive demand for
            energy, including oil and gas, for years to come. At the same time,
            the need to tackle climate change means there is a global transition
            under way to a low-carbon energy system.
          </span>
          <span>
          <h2>   Our people </h2> people are essential to the successful delivery of
            the Shell strategy and to sustaining business performance over the
            long term. Performing competitively in the evolving energy landscape
            requires competent and empowered people working safely together
            across Shell. We believe that diverse teams led by inclusive leaders
            deliver better safety and business performance.
          </span>
        </div>
      </div><Heritage/><Interest/><SideBar/><TopBtn/>
    </div>
  );
};

export default WhoWeAre;
