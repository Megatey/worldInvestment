import React,{useEffect,useState} from 'react'
import Other from "./Other";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import AboutPage from "./AboutPage";
import Heritage from "./Heritage";

const AboutUs = () => {

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
   <AboutPage/>
      <Other/>
      <Heritage/>
       {isVisible && <TopBtn />}
      <SideBar/>
     </div>
  );
};

export default AboutUs;
