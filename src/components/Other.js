import React from "react";
import { Link } from "react-router-dom";

const Other = () => {
  return ( <section id="testify">
    <div className="others">
      <div className="others-header">
        <h1>FEATURED CONTENT</h1>
      </div>
      <div className="others-menu">
      <Link to={'/who-we-are'}>   <span className="ms ms2">
          <div className="menu-img adjust a1"></div>
          <div className="menu-img-content">
            <h2> Who We Are</h2>
            Find out about our business, people and how we are working to power
            progress together with more and cleaner energy solutions.
          </div>
        </span></Link>
        <Link to={'/what-we-do'}>  <span className="ms ms2">
          <div className="menu-img a2 adjust"></div>
          <div className="menu-img-content">
            <h2> What we do</h2>
            World International Investment Plc is a global group of energy and petrochemical companies that
            aims to meet the world’s growing need for more and cleaner energy
            solutions in ways that are economically, environmentally and
            socially responsible.
          </div>
        </span></Link>
        <Link to={'/our-values'}>    <span className="ms ms2">
          <div className="menu-img mi-3 adjust a3"></div>
          <div className="menu-img-content">
          <h2>Our Values</h2>
             At World International Investment Plc, we share a set of core values – honesty,
            integrity and respect for people – which underpin all the work we
            do. The World International Investment Plc General Business Principles, Code of Conduct, and
            Ethics and Compliance Manual help everyone at World International Investment Plc act in line with
            these values and comply with relevant laws and regulations.
          </div>
        </span>{" "}</Link>
        <Link to={'/project'}>  <span className="ms ms2">
          <div className="menu-img mi-3 adjust a4"></div>
          <div className="menu-img-content ">
            <h2> Our major projects</h2>
            World International Investment Plc’s major projects show our technology and expertise in action.
          </div>
        </span></Link>
      </div>
    </div></section>
  );
};

export default Other;
