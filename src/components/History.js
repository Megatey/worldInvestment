import React,{useEffect,useState} from 'react'
import Interest from "./Interest";
import SideBar from "./SideBar";
import TopBtn from "./TopBtn";
import { Link } from "react-router-dom";
const History = () => {

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
          <span className='display-none-reverse'> {">"} </span>
          <span className="about-us-div-header-span display-none-reverse">Heritage</span>
          <span className='display-none-reverse'> {">"} </span>
          <span className="about-us-div-header-span display-none-reverse">History</span>
        </div>
        <div className="about-us-div-header-img history">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1>History</h1>
            WORLD INTERNATIONAL INVESTMENT PETROLEUM COMPANY, 47 others set to
            lift Nigeria’s crude oil Following the tactical rebranding, which
            the company underwent in the last few months ago.
          </span>
        </div>
        <div className="text-note display-none">
          <h1>History</h1>
          WORLD INTERNATIONAL INVESTMENT PETROLEUM COMPANY, 47 others set to
          lift Nigeria’s crude oil Following the tactical rebranding, which the
          company underwent in the last few months ago.
        </div>
      </div>{" "}
      <div className="his-pad">
        <div className="history-header">
          <h2>SUMMARY</h2>
        </div>
        <div className="text-note tn">
          <h1>The Nigerian National Petroleum Corporation</h1> (NNPC,) has named this
          fledgling company, WORLD INTERNATIONAL INVESTMENT PETROLEUM COMPANY,
          among the fifty indigenous and foreign companies that have been
          awarded contracts to lift Nigeria’s crude oil from 2018/2023 crude oil
          term.<br/><br/> The 50 companies are among a total of 254 that participated in
          the bids held last January for the sale and purchase of the Nigerian
          National Petroleum Corporation (NNPC) equity crude under the 2018/2023
          crude oil term contract.<br/><br/> At the bids-opening ceremony in January, the
          Group General Manager,Crude Oil Marketing Division, Mele Kyari, listed
          some of the conditions potential off-takers were expected to meet
          under the 2018/2023 crude term contract, which include, possessing a
          minimum annual turnover of $500 million for 2017 and net worth of $250
          million for 2017, apart from having the 2016 & 2017 audited accounts.
          While, the Nigerian National Petroleum Corporation, (NNPC),
          spokesperson, Ndu Ughamadu, said eventual winners would be selected as
          licensed off-takers to trade on Nigeria’s equity crude for a 12 months
          period.
        </div>
        <div className="history-header">
          <h2>Indigenous Beneficiaries</h2>
        </div>
        <div className="text- tn">
          Other indigenous beneficiaries are Oando, Sahara Energy, MRS Oil and
          Gas, AA Rano, Bono, Masters Energy, Eterna Oil and Gas, Cassiva
          Energy, Hyde Energy and Brittania U Northwest Petroleum, Optima
          Energy, AMG Petroenergy, Arkiren Oil and Gas Limited, Shoreline
          Limited, Entourage Oil, Obat Oil, Setana Energy and Prudent Energy.<br/><br/> In
          the realm of this development, the chairman of the company, Rd Capt.
          Charles Onuoha, assured of making huge profits in the foreseeable
          future. Under the capable management of his of his entire team, who
          has been at the helms of affairs of the company since 2013, WORLD
          INTERNATIONAL INVESTMENT PETROLEUM COMPANY Limited, has been making
          giant strides, which have led to increased service delivery and
          customer satisfaction.<br/><br/>This milestone is another achievement following
          the long-term agreement, the company signed with Vital Allied Energy
          Supply & Services Ltd, (VAE) to supply 100,000mt of refined product
          quarterly, with a delivery of 30,000mt monthly. <br/><br/>WORLD INTERNATIONAL
          INVESTMENT PETROLEUM COMPANY, established in 2008 under the astute
          leadership of Rd Capt. Charles Onuoha has over the years transformed
          into a massive corporate beast boasting over 50 mega petrol stations
          across the country, several land and sea fuel haulage vessels and a
          mammoth tank farm that can store up to 65 million litres of oil.
        </div>
      </div>
      <div className="menu">
      <Link to={'/history'}> <span className="menu-span">
          <div className="menu-img"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2">Brief History</h2>WORLD INTERNATIONAL
            INVESTMENT PETROLEUM COMPANY, 47 others set to lift Nigeria’s crude
            oil
            <br /> <span className="underline udl">Learn more</span>
          </div>
        </span></Link> 
        <Link to={'/board-member'}>  <span className="menu-span">
          <div className="menu-img mi-2"></div>
          <div className="menu-img-content">
            <h2 className="menu-span-h2">Board Member</h2>
            The World International Investment petroleum company plc Executive
            Committee, led by Rt Capt. Charles Onuoha. Bsc/MSC. Electrical Engr
            & strategy management. (CEO), is responsible for running WIIPC’s
            businesses and delivering on its corporate strategy.
            <br /> <span className="underline udl">Read more</span>
          </div>
        </span></Link> 
        <Link to={'/project'}>    <span className="menu-span">
          <div className="menu-img mi-img"></div>
          <div className="menu-img-content">
            <h2> Our major projects</h2>
            World International Investment Plc’s major projects show our
            technology and expertise in action.
            <br /> <span className="underline udl">Learn more</span>
          </div>
        </span></Link> 
      </div>
      <Interest />
      <SideBar />
      {isVisible && <TopBtn />}
    </div>
  );
};

export default History;
