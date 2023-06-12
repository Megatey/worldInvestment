import React from "react";

const Footer = () => {
  return (
    <div className="footer-wrap">
      <div className="footer">
        <div className="footer1">
          <span className="footer1-span">
            <h1>More in Home</h1>
            <span> Brief History</span>
            <span>Board Member</span>
            <span>About Us</span>
            <span>Featured Content</span>
            <span>Help</span>
          </span>

          <span className="footer1-span">
            <h1>More about Us</h1>
            <span> Who we are</span>
            <span>What we do</span>
            <span>Our Values</span>
            <span>Our major projects</span>
          </span>

          <span className="footer1-span">
            <h1>Can we help?</h1>
            <span>Privacy Notices</span>
            <span>Terms & Condition</span>
            <span>Feed Backs</span>
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
