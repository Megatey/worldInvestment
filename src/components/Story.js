import React from "react";
import { useNavigate } from 'react-router-dom'

const Story = () => {
  const navigate = useNavigate();
  return (<section id="story">
    <div className="story">
      <div className="story-div"><div>
        <h2>CEO SPEECH</h2> The World International Investment petroleum company
        plc Executive Committee, led by Rt Capt. Charles Onuoha. Bsc/MSC.
        Electrical Engr & strategy management. (CEO), is responsible for running
        WIIPC’s businesses and delivering on its corporate strategy.
        <button onClick={() => navigate('/ceo-speech')}>Read the speeches</button>
      </div></div>
      <div className="story-div-img  mic-one cntr">
             </div>
    </div></section>
  );
};

export default Story;
