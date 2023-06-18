import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContactDialogue from "./ContactDialogue";

    function ContactPage() {
      const [showCatalogue, setShowCatalogue] = useState(false)
  return (
    <div className="about-us pad-top">
      {showCatalogue && <ContactDialogue setShowCatalogue={setShowCatalogue}/>}
      <div className="about-us-div">
        <div className="about-us-div-header">
          <span className='display-none'> {'<'} </span>
        <Link to={'/'}>   <span className="about-us-div-header-span">Home </span></Link>
          <span className='display-none-reverse'> {'>'} </span>
          <span className="about-us-div-header-span display-none-reverse">Feed Backs</span>
        </div>

        <div className="about-us-div-header-img audhi">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1> Contact US </h1>
            Send us a feedback now straight to our mail and we at World
            International Investment would be glad to respond and work on your
            grievances.
            <button onClick={() => setShowCatalogue(true)}><i class="fa-solid fa-pen"></i>&nbsp;&nbsp;Compose</button>
          </span>
        </div>
        <div className="text-note display-none">  <h1> Contact US </h1>
            Send us a feedback now straight to our mail and we at World
            International Investment would be glad to respond and work on your
            grievances.<br/><br/>
            <button onClick={() => setShowCatalogue(true)}><i class="fa-solid fa-pen display-none-reverse"></i>&nbsp;&nbsp;Compose</button></div>
      </div>
    </div>
  );
};

export default ContactPage;
