import React, {  useState } from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import PrivacyNotices from "./components/PrivacyNotices";
import TermsConditions from "./components/TermsConditions";
import ContactDialogue from "./components/ContactDialogue";
import WhatWeDo from "./components/WhatWeDo";
import WhatWeDoComponents from "./components/WhatWeDoComponents";
import OurValues from "./components/OurValues";
import WhoWeAre from "./components/WhoWeAre";
import Heritage from "./components/Heritage";
import OurHeritage from "./components/OurHeritage";
import History from "./components/History";
import Project from "./components/Project";
import BoardMember from "./components/BoardMember";

const App = () => {
  // const [showLink, setShowLink] = useState(false);
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs/>} />
          {/* {showLink && <ContactDialogue setOpen={setShowLink} />} */}
          <Route path="/privacy-notices" element={<PrivacyNotices />} />
          <Route path="/terms-condition" element={<TermsConditions />} />
          <Route path="/what-we-do" element={<WhatWeDo/>}/>
          <Route path="/our-values" element={<OurValues/>}/>
          <Route path="/who-we-are" element={<WhoWeAre/>}/>
          <Route path="/heritage" element={<Heritage/>}/>
          <Route path="/our-heritage" element={<OurHeritage/>}/>
          <Route path="/history" element={<History/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/board-member" element={<BoardMember/>}/>
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
