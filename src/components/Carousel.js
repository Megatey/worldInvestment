import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Carousel = () => {
  const [num, setNum] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      if (num > 3) {
        setNum(1);
        return;
      }
      setNum((prev) => prev + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [num]);

  return (
 <section id="home">   <div className="carousels">
      <span className="carousels-div1">
        {num === 1 ? (
              <span className="carousels-div1-span">
            <h3> Brief History</h3>
            WORLD INTERNATIONAL INVESTMENT PETROLEUM COMPANY, 47 others set to
            lift Nigeria’s crude oil
            <Link to={'/history'}> <span className="underline">Learn more</span>{" "}</Link> 
          </span> 
        ) : num === 2 ? (
           <span className="carousels-div1-span">
            <h3>Board Member</h3>
            The World International Investment petroleum company plc Executive
            Committee, led by Rt Capt. Charles Onuoha. Bsc/MSC. Electrical Engr
            & strategy management. (CEO), is responsible for running WIIPC’s
            businesses and delivering on its corporate strategy.
            <Link to={'/board-member'}>    <span className="underline">Read more</span>{" "}</Link>
          </span>
        ) : num === 3 ? (
             <span className="carousels-div1-span">
            <h3>About Us</h3>
            World International Investment Plc is a global group of energy and
            petrochemical companies that aims to meet the world’s growing need
            for more and cleaner energy solutions in ways that are economically,
            environmentally and socially responsible.
            <Link to={'/about-us'}>  <span className="underline">Learn more</span>{" "}</Link>
          </span>
       
        ) : (
          num > 3 && setNum(1)
        )}
      </span>

      {num === 1 ? (
   <span className="carousels-div2">
              <span className="carousels-div2-span">
            <h3>Who We Are</h3>
            Find out about our business, people and how we are working to power
            progress together with more and cleaner energy solutions.
            <Link to={'/who-we-are'}>  <span className="underline">Read more</span></Link>
          </span>
        </span>
           ) : num === 2 ? (
          <span className="carousels-div2 cd3">
          <span className="carousels-div2-span">
            <h3>What we do</h3>
            World International Investment Plc is a global group of energy and
            petrochemical companies that aims to meet the world’s growing need
            for more and cleaner energy solutions in ways that are economically,
            environmentally and socially responsible.
            <Link to={'/what-we-do'}>     <span className="underline">Read more</span></Link>
          </span>
        </span>
        ) : num === 3 ? (
         <span className="carousels-div2 cd5">
          <span className="carousels-div2-span">
            <h3> Our major projects</h3>
            World International Investment Plc’s major projects show our
            technology and expertise in action.
            <Link to={'/project'}>   <span className="underline">Read more</span></Link>
          </span>
        </span>
      ) : (
        num > 3 && setNum(1)
      )}
    </div></section>
  );
};

export default Carousel;
