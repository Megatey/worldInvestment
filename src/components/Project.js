import React from 'react'
import { Link } from 'react-router-dom'
const Project = () => {
  return (
    <div className="about-us pad-top">
      <div className="about-us-div">
        <div className="about-us-div-header">
        <Link to={'/'}>    <span className="about-us-div-header-span">Home </span></Link>
          <span> > </span>
          <Link to={'/about-us'}>  <span className="about-us-div-header-span">About Us</span></Link>
          <span> > </span>
          <Link to={'/our-heritage'}>   <span className="about-us-div-header-span">Heritage</span></Link>
          <span> > </span>
          <span className="about-us-div-header-span">Project</span>
        </div>
        <div className="about-us-div-header-img m-img">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1>Project</h1>
            Tracing Shell’s history takes you on a journey from London to Asia,
            from the birth of the motor car to the development of sustainable
            fuels. It is a history of exploration, innovation and a pioneering
            spirit that still guides Shell to this day.
          </span>
        </div>
        <div className='text-note display-none'> <h1>Project</h1>
            Tracing Shell’s history takes you on a journey from London to Asia,
            from the birth of the motor car to the development of sustainable
            fuels. It is a history of exploration, innovation and a pioneering
            spirit that still guides Shell to this day.</div>
      </div></div>
  )
}

export default Project