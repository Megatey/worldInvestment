import React from "react";

const Ads = ({ onClose }) => {
  return (
    <div className="ads-popup">
      <div className="ads-content">
        <div className="ads-img"></div>
        <div className="ads-cont">
          <span>
            <h1>ELEGANT SOLUTIONS</h1>
            <h4>Our Services Includes:</h4>
            <ul>
              <li>Enterprise Web Application</li>
              <li>e Commerce Web Application</li>
              <li>Blogs & Social Website</li>
              <li>Responsive Web Development</li>
            </ul>
            <h4>Other Services Includes:</h4>
            <ul>
              <li>Amazon Web Security</li>
              <li>Microsoft</li>
              <li>Networking & Hardware</li>
              <li>Project Management</li>
              <li>Graphics / Logo Design</li>
              <li>Digital Marketing</li>
            </ul>
          </span>
        </div>
      </div>{" "}
      <button onClick={onClose}>&times;</button>
    </div>
  );
};

export default Ads;
