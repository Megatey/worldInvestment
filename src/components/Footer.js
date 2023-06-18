import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="footer1">
          <span className="footer1-span">
            <ul><h1>More in Home</h1>
            <li className="footer1-span-ul-li">   <Link to={'/history'}><span> Brief History</span></Link></li>
          <li className="footer1-span-ul-li">   <Link to={'/board-member'}> <span>Board Member</span></Link></li>
          <li className="footer1-span-ul-li">  <Link to={'/about-us'}>  <span>About Us</span></Link></li></ul>
          </span>

          <span className="footer1-span">
            <ul><h1>More about Us</h1>
            <li className="footer1-span-ul-li">   <Link to={'/who-we-are'}> Who we are</Link></li>
            <li className="footer1-span-ul-li"> <Link to={'/what-we-do'}>What we do</Link></li>
            <li className="footer1-span-ul-li"><Link to={'/our-values'}> Our Values</Link></li>
            <li className="footer1-span-ul-li"> <Link to={'/project'}> Our major projects</Link></li></ul>
          </span>

          <span className="footer1-span">
          <ul>  <h1>Can we help?</h1>
          <li className="footer1-span-ul-li">    <Link to={'/privacy-notices'}>  Privacy Notices</Link></li>
          <li className="footer1-span-ul-li">   <Link to={'/terms-condition'}> Terms & Condition</Link></li>
          <li className="footer1-span-ul-li">  <Link to={'/contact-us'}> Feed Backs</Link> </li> </ul>
          </span>

          <span className="footer1-span ">
          <ul className=" f1s">  <h1>Connect with us</h1>
          <li className="footer1-span-ul-li f1s2"><a href={'/'} target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-instagram"></i>  Instagram</a></li>
          <li className="footer1-span-ul-li f1s2"><a href={'/'}> <i class="fa-brands fa-youtube"></i>  Youtube</a></li>
            <li className="footer1-span-ul-li f1s2"><a href={'/'} target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-facebook-f"></i>  Facebook</a></li>
            <li className="footer1-span-ul-li f1s2"><a href={'/'} target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-twitter"></i> Twitter</a></li>
            <li className="footer1-span-ul-li f1s2"><a href={'/'} target="_blank" rel="noopener noreferrer"> <i class="fa-brands fa-linkedin-in"></i>  LinkedIn</a></li> </ul>
          </span>
        </div>

        <div className="footer2">
          <span>World International Investment Plc.. </span>
          <span>all rights reserved &copy; 2023</span>
          <span className="watermark">POWERED BY: ELEGANT SOLUTIONS </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
