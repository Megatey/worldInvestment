import React,{useEffect,useState} from 'react'
import { Link } from "react-router-dom";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import Heritage from "./Heritage";
import Interest from "./Interest";
const Project = () => {

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
          <Link to={"/"}>
            {" "}
            <span className="about-us-div-header-span">Home </span>
          </Link>
          <span className='display-none-reverse'>{">"}</span>
          <Link to={"/about-us"}>
            {" "}
            <span className="about-us-div-header-span display-none-reverse">About Us</span>
          </Link>
          <span className='display-none-reverse'> {">"} </span>
          <Link to={"/our-heritage"}>
            {" "}
            <span className="about-us-div-header-span display-none-reverse">Heritage</span>
          </Link>
          <span className='display-none-reverse'>{">"} </span>
          <span className="about-us-div-header-span display-none-reverse">Project</span>
        </div>
        <div className="about-us-div-header-img project">
          <span className="about-us-div-header-img-txt display-none-reverse">
          <h1>Our Major Projects </h1>Take a
          look inside some of our major projects to see how human ingenuity
          pushes technical boundaries to safely and efficiently deliver energy,
          helping to meet rising global demand.
          </span>
        </div>
        <div className="text-note display-none">
          <h1>Our Major Projects </h1>Take a
          look inside some of our major projects to see how human ingenuity
          pushes technical boundaries to safely and efficiently deliver energy,
          helping to meet rising global demand.
        </div>
      </div>

      <div className="menu">
        <span className="menu-span">
          <div className="menu-img aaa"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2"> Exploration and Production:</h2>
            Offshore drilling projects
            <br />
            Onshore oil and gas fields
            <br />
            Deepwater exploration
            <br />
            Shale gas extraction projects
          </div>
        </span>
        <span className="menu-span">
          <div className="menu-img bbb"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2"> Refining and Processing:</h2>
            Refinery construction and modernization projects
            <br />
            Petrochemical plant installations
            <br />
            Gas processing facilities
            <br />
            Liquefied Natural Gas (LNG) terminals
          </div>
        </span>
        <span className="menu-span">
          <div className="menu-img ccc"></div>
          <div className="menu-img-content">
            <h2> Pipeline and Transport:</h2>
            Oil and gas pipeline construction
            <br />
            Pipeline integrity and maintenance projects
            <br />
            Terminal facilities for storage and loading
            <br />
            Gas compression and pumping stations
          </div>
        </span>
      </div>

      <div className="menu">
        {" "}
        <span className="menu-span">
          <div className="menu-img ddd"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2"> Renewable Energy:</h2>
            Solar energy projects
            <br />
            Wind power installations
            <br />
            Biomass and biofuel initiatives
            <br />
            Geothermal energy exploration and utilization
          </div>
        </span>{" "}
        <span className="menu-span">
          <div className="menu-img eee"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2">
              {" "}
              Environmental and Sustainability Initiatives:
            </h2>
            Carbon capture and storage projects
            <br />
            Methane emission reduction programs
            <br />
            Renewable energy integration strategies
            <br />
            Environmental impact assessments and mitigation projects
          </div>
        </span>{" "}
        <span className="menu-span">
          <div className="menu-img fff"></div>
          <div className="menu-img-content">
            <h2> Technological Advancements:</h2>
            Enhanced Oil Recovery (EOR) techniques
            <br />
            Advanced drilling technologies
            <br />
            Digitalization and data analytics projects
            <br />
            Internet of Things (IoT) applications in oil and gas operations
          </div>
        </span>
      </div>

      <div className="menu">
        {" "}
        <span className="menu-span">
          <div className="menu-img ggg"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2">
              {" "}
              Community and Social Responsibility Programs:
            </h2>
            Local employment and training initiatives
            <br />
            Environmental conservation and restoration projects
            <br />
            Health and safety campaigns
            <br />
            Social investment and community development programs
          </div>
        </span>{" "}
        <span className="menu-span">
          <div className="menu-img hhh"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2"> International Operations:</h2>
            Global exploration and production ventures
            <br />
            International partnerships and joint ventures
            <br />
            Cross-border pipeline and transport projects
            <br />
            Overseas refinery and processing facilities
          </div>
        </span>
      </div>
      {isVisible && <TopBtn />}
      <SideBar />
      <Heritage />
      <Interest />
    </div>
  );
};

export default Project;
