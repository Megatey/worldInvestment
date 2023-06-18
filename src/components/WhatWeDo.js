import React,{useEffect,useState} from 'react'
import WhatWeDoComponents from "./WhatWeDoComponents";
import Interest from "./Interest";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";

const WhatWeDo = () => {

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
    <div>
        <WhatWeDoComponents/>
<Interest/>{isVisible && <TopBtn />}<SideBar/>
    </div>
  );
};

export default WhatWeDo;
