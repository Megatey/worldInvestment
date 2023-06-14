
import React, { useEffect, useState } from "react";
import Carousel from './Carousel';
import Help from './Help';
import Menu from './Menu';
import Other from './Other';
import Story from './Story';
import TopBtn from './TopBtn';
import SideBar from "./SideBar";

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
  return (
    <div className="App" style={{ position: "relative" }}>
      <Carousel/>
    <Menu/>
    <Other/>
    <Help/>
    <Story/>
       {isVisible && <TopBtn />}
       <SideBar/>
       </div>
  )
}

export default HomePage