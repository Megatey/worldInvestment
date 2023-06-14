import React from "react";
import Interest from "./Interest";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
const OurValues = () => {
  return (
    <div className="about-us pad-top">
      <div className="about-us-div">
        <div className="about-us-div-header">
        <Link to={'/'}>     <span className="about-us-div-header-span">Home </span></Link>
          <span> {'>'}</span>
          <Link to={'/about-us'}>   <span className="about-us-div-header-span">About Us</span></Link>
          <span> {'>'} </span>
          <span className="about-us-div-header-span">Our Values</span>
        </div>
        <div className="about-us-div-header-img value">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1> Our Values </h1>
            At World International Investment, we share a set of core values –
            honesty, integrity and respect for people – which underpin all the
            work we do. The World International Investment General Business Principles, Code of Conduct
            and Ethics and Compliance Manual help everyone act in line
            with these values and comply with relevant laws and regulations.
          </span>
        </div>
        <div className="text-note display-none">       <h1> Our Values </h1>
        At World International Investment, we share a set of core values –
            honesty, integrity and respect for people – which underpin all the
            work we do. The World International Investment General Business Principles, Code of Conduct
            and Ethics and Compliance Manual help everyone act in line
            with these values and comply with relevant laws and regulations.</div>
      </div>
      <div className="menu">
        <span className="menu-span menu-span2">
          <div className="menu-img honest"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2">Honesty</h2>
            Staff and Business Partners are encouraged to Speak Up and celebrate
            those who do the right thing.
          </div>
        </span>
        <span className="menu-span menu-span2">
          <div className="menu-img mi-2 respect"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2"> Respect</h2>
            Our people have the opportunity to progress irrespective of gender,
            ethnicity, or other differences.
          </div>
        </span>
        <span className="menu-span menu-span2">
          <div className="menu-img mi-3 integrity"></div>
          <div className="menu-img-content">
            <h2> Integrity</h2>
            By committing to our policies and rules, we empower our Staff and
            Business Partners to say “No”.
          </div>
        </span>
      </div>
      <div className="conduct"><div className="conduct-div">
        <span className="img-span"></span>
        <span className="val-text-span">
        <h2>  How we conduct our business</h2> The World International Investment General Business Principles are
          central to how we conduct our business and living by them is crucial
          to our continued success. We are judged by how we act and how we live
          up to our core values of honesty, integrity and respect for people.
          Our Business Principles are based on these. They promote trust,
          openness, teamwork and professionalism, as well as pride in what we do
          and how we conduct business. As part of these principles, we commit to
          contribute to sustainable development, balancing short and long-term
          interests and integrating economic, environmental and social
          considerations into our decision-making. All World International  Investment employees and
          contractors, and those at joint ventures we operate, are expected to
          understand and continually behave in line with our Business
          Principles. We expect suppliers, and joint ventures that we do not
          operate, to apply equivalent principles.
        </span></div>
      </div><Interest/><TopBtn/><SideBar/>
    </div>
  );
};

export default OurValues;
