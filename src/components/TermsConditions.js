import React, { useEffect, useState } from "react";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  AOS.init({
    duration: 1200,
  });

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
    <div className="about-us pad-top">
      <div className="about-us-div">
        <div className="about-us-div-header">
          <span className='display-none'> {'<'}</span>
          <Link to={"/"}>
            {" "}
            <span className="about-us-div-header-span">Home </span>
          </Link>
          <span className="display-none-reverse"> {">"}</span>
          <span className="about-us-div-header-span display-none-reverse">Terms & Conditions</span>
        </div>

        <div className="mid">
          <h1> TERMS AND CONDITIONS</h1>
          <span>
            {" "}
            Welcome to the WorldInternationalInvestment.com topsite. This web
            site is owned and operated by World International Investment, a
            company registered in The Nigeria with registered number 27155369
            whose registered office is at NNPC Bonny Export Terminal Office,
            Bonny, Rivers State Nigeria.
            <br />
          </span>
        </div>

        <div className="about-us-div-header-img terms">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1> Our Terms</h1>
            These Terms and Conditions govern your use of the World
            International Investment oil and gas website. By accessing or using
            the Website, you agree to be bound by these Terms. If you do not
            agree to these Terms, please refrain from using the Website.
          </span>
        </div>
        <div className="text-note display-none" data-aos="slide-up">
          <h1> Our Terms</h1>
          These Terms and Conditions govern your use of the World International
          Investment oil and gas website. By accessing or using the Website, you
          agree to be bound by these Terms. If you do not agree to these Terms,
          please refrain from using the Website.
        </div>

        <div className="white" data-aos="slide-up">
          <div className="white-div1">
            <ul>
              <a href="#Use-of-the-Website">
                {" "}
                <li>Use of the Website</li>
              </a>
              <a href="#Intellectual-Property">
                {" "}
                <li>Intellectual Property</li>
              </a>
              <a href="#User-Submissions">
                {" "}
                <li>User Submissions</li>
              </a>
              <a href="#Third-Party-Websites-and-Content">
                {" "}
                <li>Third-Party Websites and Content</li>
              </a>
              <a href="#Disclaimer-of-Warranties">
                {" "}
                <li>Disclaimer of Warranties</li>
              </a>
              <a href="#Limitation-of-Liability">
                {" "}
                <li>Limitation of Liability</li>
              </a>
              <a href="#Indemnification">
                {" "}
                <li>Indemnification</li>
              </a>
              <a href="#Termination">
                {" "}
                <li>Termination</li>
              </a>
              <a href="#Governing-Law">
                {" "}
                <li>Governing Law</li>
              </a>

              <a href="#Entire-Agreement">
                {" "}
                <li> Entire Agreement</li>
              </a>
            </ul>
          </div>

          <div className="main-faqs">
          <section id="Use-of-the-Website">   <div data-aos="slide-up">
              <h2> Use of the Website: </h2>
              <br />
              a. You must be at least 18 years old to use the Website or have
              the consent of a legal guardian. <br />
              <br />
              b. You agree to use the Website for lawful purposes only and in
              compliance with applicable laws, regulations, and these Terms.{" "}
              <br />
              <br />
              c. You are solely responsible for maintaining the confidentiality
              of your account, login credentials, and any activities conducted
              through your account.
              <br />
              <br />
              d. You agree not to engage in any unauthorized use, tampering, or
              disruption of the Website, including but not limited to hacking,
              introducing viruses, or any activity that may harm the Website or
              its users.
            </div></section>

            <section id="Intellectual-Property">  <div data-aos="slide-up">
              <h2>Intellectual Property:</h2>
              <br />
              a. The Website and its content, including but not limited to text,
              images, logos, trademarks, videos, and graphics, are the property
              of World International Investment Plc and are protected by
              intellectual property laws.
              <br />
              <br />
              b. You may not reproduce, distribute, modify, or use any part of
              the Website or its content without prior written permission from
              World International Investment Plc.
            </div></section>

            <section id="User-Submissions"> <div data-aos="slide-up">
              <h2>User Submissions:</h2>
              <br />
              <br />
              a. By submitting any content, information, or materials to the
              Website, you grant World International Investment Plc a
              non-exclusive, royalty-free, perpetual, worldwide, and irrevocable
              license to use, reproduce, modify, adapt, publish, translate,
              distribute, and display such submissions.
              <br />
              <br />
              b. You represent and warrant that any content you submit does not
              infringe upon the rights of any third party, including copyright,
              trademark, or privacy rights.
            </div></section>

            <section id="Third-Party-Websites-and-Content"> <div data-aos="slide-up">
              <h2> Third-Party Websites and Content:</h2>
              <br />
              a. The Website may contain links to third-party websites or
              display content from third-party sources. World International
              Investment Plc does not endorse or assume any responsibility for
              the accuracy, reliability, or legality of such websites or
              content. <br />
              <br />
              b. Your use of third-party websites or content is at your own
              risk, and you should review the terms and privacy policies of
              those websites before using them.
            </div></section>

            <section id="Disclaimer-of-Warranties">    <div data-aos="slide-up">
              <h2> Disclaimer of Warranties:</h2>
              <br />
              a. The Website and its content are provided on an "as is" and "as
              available" basis without any warranties or representations,
              whether express or implied, including but not limited to
              warranties of merchantability, fitness for a particular purpose,
              or non-infringement. <br />
              <br />
              b. World International Investment Plc does not guarantee the
              accuracy, completeness, or reliability of the information provided
              on the Website. You acknowledge and agree that your use of the
              Website is at your own risk.
            </div></section>

         
            <section id="Limitation-of-Liability">   <div data-aos="slide-up">
              <h2> Limitation of Liability:</h2>
              <br />
              a. To the fullest extent permitted by law, World International
              Investment Plc shall not be liable for any direct, indirect,
              incidental, consequential, or punitive damages arising out of or
              in connection with your use of the Website. <br />
              <br />
              b. World International Investment Plc shall not be liable for any
              damages or losses resulting from interruptions, delays, or errors
              in the operation of the Website or any technical issues or
              unauthorized access to your personal information.
            </div></section>

         
            <section id="Indemnification">  <div data-aos="slide-up">
              <h2>Indemnification: </h2>
              <br />
              You agree to indemnify, defend, and hold harmless World
              International Investment Plc, its officers, directors, employees,
              and affiliates from any claims, losses, damages, liabilities,
              costs, and expenses, including reasonable attorneys' fees, arising
              out of or related to your use of the Website or violation of these
              Terms.
            </div></section>

            
            <section id="Termination"> <div data-aos="slide-up">
              <h2> Termination: </h2>
              <br />
              World International Investment Plc reserves the right to suspend
              or terminate your access to the Website at any time, without
              notice or liability, for any reason.
            </div></section>

            <section id="Governing-Law">   <div data-aos="slide-up">
              <h2>Governing Law:</h2>
              <br />
              These Terms shall be governed by and construed in accordance with
              the laws. Any disputes arising out of or
              relating to these Terms or the use of the Website shall be subject
              to the exclusive jurisdiction of the courts.
            </div></section>

            <section id="Entire-Agreement">
              {" "}
              <div data-aos="slide-up">
                <h2>Entire Agreement:</h2>
                <br />
                These Terms constitute the entire agreement between you and
                World International Investment Plc regarding your use of the
                Website, superseding any prior agreements or understandings.
              </div>
            </section>
          </div>
        </div>
      </div>
      <SideBar />
      {isVisible && <TopBtn />}
    </div>
  );
};

export default TermsConditions;
