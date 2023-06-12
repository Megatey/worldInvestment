import React from 'react'

const TopBtn = () => {  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="top-contain" onClick={scrollToTop}>
   <span><i class="fa-solid fa-arrow-up"></i></span>
  </div>
  )
}

export default TopBtn