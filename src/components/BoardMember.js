import React,{useEffect,useState} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Story from "./Story";
import { Link } from "react-router-dom";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
const BoardMember = () => {
  AOS.init({
    duration: 1200,
  });

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
          <span className='display-none'> {"<"} </span>
          <Link to={"/"}>
            {" "}
            <span className="about-us-div-header-span">Home </span>
          </Link>
          <span className="display-none-reverse"> {">"} </span>
          <Link to={"/about-us"}>
            {" "}
            <span className="about-us-div-header-span display-none-reverse">About Us</span>
          </Link>
          <span className="display-none-reverse"> {">"} </span>
          <Link to={"/our-heritage"}>
            {" "}
            <span className="about-us-div-header-span display-none-reverse">Heritage</span>
          </Link>
          <span className="display-none-reverse"> {">"} </span>
          <span className="about-us-div-header-span display-none-reverse">Board Member</span>
        </div>
        <div className="mid" data-aos="slide-up">
          <h1>EXECUTIVE COMMITTEE</h1> The World International Investment
          petroleum company plc Executive Committee, led by Rt Capt. Charles
          Onuoha. Bsc/MSC. Electrical Engr & strategy management. (CEO), is
          responsible for running WIIPC’s businesses and delivering on its
          corporate strategy.{" "}
        </div>
        <div className="text-note">
          The Chief Executive Officer has final authority in all matters of
          management that are not within the duties and authorities of the Board
          or of the shareholders’ general meeting. The Executive Committee
          supports the Chief Executive Officer and implements all Board
          resolutions and supervises all management levels in World Investment
          International Plc.
        </div>
      </div>
      <div className="menus">
        <span className="menu-span">
          <div className="menu-img mic-one"></div>
          <div className="menu-img-content mcs">
            <h2 className="menu-span-h2">
              {" "}
              Rt Capt. Charles Onuoha. BSC/MSC. Electrical Engr & strategy
              management. (CEO)
            </h2>
          </div>
        </span>
        <span className="menu-span">
          <div className="menu-img mic-two "></div>
          <div className="menu-img-content mcs">
            <h2 className="menu-span-h2">
              {" "}
              Ms. Jones Anderson BSC, MBA linguistic (offshore negotiator)
            </h2>
          </div>
        </span>
        <span className="menu-span">
          <div className="menu-img mic-three"></div>
          <div className="menu-img-content mcs">
            <h2 className="menu-span-h2">
              Mr. Daniel Harry. BSC/ MBS chemical engineer. (Procurement and
              logistic manager.)
            </h2>
          </div>
        </span>
        <span className="menu-span">
          <div className="menu-img mic-four"></div>
          <div className="menu-img-content mcs">
            <h2>
              {" "}
              Mr. Davies Harrison. Prof. Statistic & strategy management.
              (Financial adviser and fiduciary)
            </h2>
          </div>
        </span>
      </div>
      <Story />
      {isVisible && <TopBtn />}
      <SideBar/>
    </div>
  );
};

export default BoardMember;
