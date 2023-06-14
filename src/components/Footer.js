import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="footer1">
          <span className="footer1-span">
            <h1>More in Home</h1>
            <Link to={'/history'}><span> Brief History</span></Link>
            <Link to={'/board-member'}> <span>Board Member</span></Link>
            <Link to={'/about-us'}>  <span>About Us</span></Link>
          </span>

          <span className="footer1-span">
            <h1>More about Us</h1>
            <Link to={'/who-we-are'}> <span> Who we are</span></Link>
            <Link to={'/what-we-do'}> <span>What we do</span></Link>
            <Link to={'/our-values'}> <span>Our Values</span></Link>
            <Link to={'/project'}> <span>Our major projects</span></Link>
          </span>

          <span className="footer1-span">
            <h1>Can we help?</h1>
            <Link to={'/privacy-notices'}>  <span>Privacy Notices</span></Link>
            <Link to={'/terms-condition'}> <span>Terms & Condition</span></Link>
            <Link to={'/contact-us'}>  <span>Feed Backs</span></Link>
          </span>

          <span className="footer1-span">
            <h1>Connect with us</h1>
            <span><i class="fa-brands fa-instagram"></i>Instagram</span>
            <span><i class="fa-brands fa-youtube"></i>Youtube</span>
            <span><i class="fa-brands fa-facebook-f"></i>Facebook</span>
            <span><i class="fa-brands fa-twitter"></i>Twitter</span>
            <span><i class="fa-brands fa-linkedin-in"></i>LinkedIn</span>
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
