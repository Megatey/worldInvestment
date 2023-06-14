import React from "react";
import { useNavigate } from 'react-router-dom'

const Heritage = () => {
  const navigate = useNavigate();
  return (
    <div className="story">
      <div className="story-div">
        <div className="heri-note">
          <h2>Our heritage</h2>
          Tracing World International Investment’s history takes you on a journey from Rivers Nigeria to some parts around the world,
          the development of sustainable
          fuels. It is a history of exploration, innovation and a pioneering
          spirit that still guides World International Investment to this day.
          <button onClick={() => navigate('/our-heritage')}>Learn more about our heritage</button>
        </div>
      </div>
      <div className="story-div-img heritage-img">
      
      </div>
    </div>
  );
};

export default Heritage;
