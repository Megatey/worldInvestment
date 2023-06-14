import React from "react";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import Menu from "./Menu";
import Heritage from "./Heritage";
import Interest from "./Interest"; import { Link } from "react-router-dom";

const CeoSpeech = () => {
  return (
    <div className="about-us pad-top">
      <div className="about-us-div">
            <div className="about-us-div-header"> 
            <Link to={'/'}> <span className="about-us-div-header-span">Home </span></Link>
              <span> {'>'}</span>
              <span className="about-us-div-header-span">CEO Speech</span>
            </div>
        <div className="mid">
          <h1>The CEO Speech</h1>
          Rt Capt. Charles Onuoha. BSC/MSC. Electrical Engr & strategy
          management. (CEO)
          <p />
        </div>
        <div className="img-wrap">
          {" "}
          <div className="ceo-img"></div>{" "}
          <div className="text-note img-row">
            Ladies and gentlemen, distinguished guests, I stand before you today
            as the CEO of our esteemed oil and gas company, a beacon of
            innovation and excellence in the industry. It is with great pleasure
            and pride that I welcome you to our website, the virtual gateway to
            our world of energy.
            <p />
            In this rapidly evolving landscape, our company has embraced the
            challenges and opportunities presented by the global energy sector.
            We recognize the critical role that oil and gas play in powering
            economies, improving living standards, and driving progress. At the
            same time, we are deeply committed to the responsible and
            sustainable development of these valuable resources.
          </div>
        </div>
        <div className="text-note">
          Our website represents our dedication to transparency, collaboration,
          and technological advancement. It serves as a platform to communicate
          our values, achievements, and aspirations. Here, you will discover the
          passion that drives us, the initiatives we undertake, and the impact
          we strive to make in the communities we operate in.
          <p />
          As an industry leader, we have made significant strides in operational
          efficiency, safety, and environmental stewardship. We understand that
          our responsibility extends beyond profit-making. We actively invest in
          cutting-edge technologies and processes that reduce our environmental
          footprint and promote sustainable practices throughout our value
          chain. From exploration to production, from refining to distribution,
          we continuously seek innovative solutions that balance the needs of
          today with the demands of tomorrow.
          <p />
          Our commitment to safety is unwavering. We prioritize the well-being
          of our workforce, ensuring a culture of safety at every level of our
          organization. We constantly endeavor to exceed industry standards,
          implementing rigorous safety protocols, training programs, and
          monitoring systems. Through our steadfast dedication, we strive to
          achieve the highest levels of operational excellence while
          safeguarding the health and welfare of our employees and the
          communities we serve.
          <p />
          At the heart of our success lies our most valuable asset: our people.
          Our team is composed of talented professionals, driven by a shared
          vision of excellence and a passion for delivering superior results. We
          foster an inclusive and diverse work environment that nurtures talent,
          encourages collaboration, and rewards innovation. We believe in
          empowering our employees to unlock their full potential, fostering a
          culture of continuous learning and personal growth.
        </div>
        <div className="iframes">
          {" "}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/tgbNymZ7vqY"
            title="ceo-speech"
          ></iframe>
        </div>
        <div className="text-note">
          As we navigate the complexities of the energy landscape, we remain
          steadfast in our commitment to deliver value to our stakeholders. We
          recognize that the world's energy needs are evolving, and we embrace
          the challenge of diversifying our energy portfolio to include cleaner
          and more sustainable sources. We actively explore and invest in
          renewable energy solutions, recognizing their pivotal role in shaping
          a greener future.
          <p />I invite you to explore our website and discover the breadth and
          depth of our operations, projects, and achievements. Engage with our
          thought leadership articles, explore our corporate social
          responsibility initiatives, and witness our unwavering commitment to
          the highest standards of business conduct and ethics.
          <p />
          Together, we can drive the energy transition, making meaningful
          contributions to the communities we serve while delivering sustainable
          returns to our valued shareholders.
          <p />
          Thank you for visiting our website, and I invite you to join us on
          this transformative journey as we shape the future of energy.<p/>Sincerely,
<p/>
Rt Capt. Charles Onuoha.<br/>
CEO, World International Investment Plc
        </div>
      </div><TopBtn/><SideBar/><Menu/><Heritage/><Interest/>
    </div>
  );
};

export default CeoSpeech;
