
import React, { useEffect, useState } from "react";
import Carousel from './Carousel';
import Help from './Help';
import Menu from './Menu';
import Other from './Other';
import Story from './Story';
import TopBtn from './TopBtn';
import SideBar from "./SideBar";
import Ads from "./Ads";

const HomePage = () => {

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
const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    const showAdInterval = setInterval(() => {
      setShowAd(true);
      disableScroll();
    }, 50000);

    return () => {
      clearInterval(showAdInterval);
      enableScroll();
    };
  }, []);

  const handleAdClose = () => {
    setShowAd(false);
    enableScroll();
  };

  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableScroll = () => {
    document.body.style.overflow = '';
  };



  return (
    <div className="App" style={{ position: "relative" }}>
      <Carousel/>
      {showAd && <Ads onClose={handleAdClose} />}
    <Menu/>
    <Other/>
    <Help/>
    <Story/>
       {isVisible && <TopBtn/>}
       <SideBar/>
       </div>
  )
}

export default HomePage