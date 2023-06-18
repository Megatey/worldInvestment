import React,{useEffect,useState} from 'react'
import Interest from "./Interest";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import Heritage from "./Heritage";
import { Link } from "react-router-dom";
const WhoWeAre = () => {

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
          <span className='display-none'> {'<'}</span>
        <Link to={'/'}>     <span className="about-us-div-header-span">Home </span></Link>
          <span className='display-none-reverse'> {'>'}</span>
          <Link to={'/about-us'}>   <span className="about-us-div-header-span display-none-reverse">About Us</span></Link>
          <span className='display-none-reverse'>  {'>'} </span>
          <span className="about-us-div-header-span display-none-reverse">Who We Are</span>
        </div>
        <div className="about-us-div-header-img are">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1> WHO WE ARE</h1>
           World international Investment Plc is an international energy company with expertise in the
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
        World international Investment Plc is an international energy company with expertise in the
            exploration, production, refining and marketing of oil and natural
            gas, and the manufacturing and marketing of chemicals. We use
            advanced technologies and take an innovative approach to help build
            a sustainable energy future. We invest in power, including from
            renewable sources such as wind and solar. We also invest in electric
            vehicle charging and low-carbon fuels for transport, such as
            advanced biofuels and hydrogen.</div>
        <div className="text-note tn-note">
          <span className="span-width">
          World international Investment Plc was formed in the 2000's, although <Link to={'/history'}>our history</Link> can be traced back to
            the first half of the 20th century.<br/>  Rt Capt. Charles Onuoha. BSC/MSC. Electrical Engr & strategy
              management. (CEO)
          </span>

          <span>
            <h2> Our purpose </h2>World international Investment's
            purpose is to power progress together by providing more and cleaner
            energy solutions. We believe that rising standards of living for a
            growing global population are likely to continue to drive demand for
            energy, including oil and gas, for years to come. At the same time,
            the need to tackle climate change means there is a global transition
            under way to a low-carbon energy system.
          </span>
          <span>
          <h2>   Our people </h2> people are essential to the successful delivery of
            the World international Investment strategy and to sustaining business performance over the
            long term. Performing competitively in the evolving energy landscape
            requires competent and empowered people working safely together
            across World international Investment. We believe that diverse teams led by inclusive leaders
            deliver better safety and business performance.
          </span>
        </div>
      </div><Heritage/><Interest/><SideBar/>{isVisible && <TopBtn />}
    </div>
  );
};

export default WhoWeAre;
