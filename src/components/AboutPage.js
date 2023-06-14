import React from 'react'
import { Link } from "react-router-dom";


const AboutPage = () => {
  return (
  
  
        <div className="about-us pad-top">
    
          <div className="about-us-div">
            
            <div className="about-us-div-header"> 
            <Link to={'/'}> <span className="about-us-div-header-span">Home </span></Link>
              <span> {'>'}</span>
              <span className="about-us-div-header-span">About us</span>
            </div>
    
            <div className="about-us-div-header-img">
            <span className="about-us-div-header-img-txt display-none-reverse">
             <h1> ABOUT US </h1>We are a global group of energy and petrochemical companies
              with qualified employees in few countries. We use
              advanced technologies and take an innovative approach to help build a
              sustainable energy future.
            </span>
            </div>
          <div className='text-note display-none'>
             <h1> ABOUT US </h1>We are a global group of energy and petrochemical companies
              with qualified employees in few countries. We use
              advanced technologies and take an innovative approach to help build a
              sustainable energy future.</div>
          </div>
          </div>
      );
    };
    
   
export default AboutPage