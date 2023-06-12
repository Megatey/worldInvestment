import React, { useState } from "react";
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";


const TermsConditions = () => {
  AOS.init({
    duration: 1200,
  })
  
  return (
    <div className="about-us pad-top">
      <div className="about-us-div">
        <div className="about-us-div-header">
         <Link to={'/'}> <span className="about-us-div-header-span">Home </span></Link>
          <span> > </span>
          <span className="about-us-div-header-span">Terms & Conditions</span>
        </div>

        <div className="mid">
          <h1> TERMS AND CONDITIONS</h1>
          <span>
            {" "}
            Welcome to the Shell.com topsite. This web site is owned and
            operated by Shell International B.V., a company registered in The
            Netherlands with registered number 27155369 whose registered office
            is at Carel van Bylandtlaan 30, 2596 HR The Hague, The Netherlands.<br/>
          </span>
        </div>

        <div className="about-us-div-header-img terms">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1> Our Terms</h1>
            These Terms and Conditions ("Terms") govern your use of the [Company
            Name] oil and gas website ("Website"). By accessing or using the
            Website, you agree to be bound by these Terms. If you do not agree
            to these Terms, please refrain from using the Website.
          </span>
        </div>
<div className="text-note display-none" data-aos="slide-up"><h1> Our Terms</h1>
            These Terms and Conditions ("Terms") govern your use of the [Company
            Name] oil and gas website ("Website"). By accessing or using the
            Website, you agree to be bound by these Terms. If you do not agree
            to these Terms, please refrain from using the Website.</div>

        <div className="white" data-aos="slide-up">
          <div className="white-div1">
            <ul>
              <a href="#Can">
                {" "}
                <li className="white-active">Use of the Website</li>
              </a>
              <a href="#will">
                {" "}
                <li>Intellectual Property</li>
              </a>
              <a href="#why">
                {" "}
                <li>User Submissions</li>
              </a>
              <a href="#what">
                {" "}
                <li>Third-Party Websites and Content</li>
              </a>
              <a href="#estimate">
                {" "}
                <li>Disclaimer of Warranties</li>
              </a>
              <a href="#does">
                {" "}
                <li>Limitation of Liability</li>
              </a>
              <a href="#deliver">
                {" "}
                <li>Indemnification</li>
              </a>
              <a href="#order">
                {" "}
                <li>Termination</li>
              </a>
              <a href="#order">
                {" "}
                <li>Governing Law</li>
              </a>

              <a href="#what">
                {" "}
                <li> Entire Agreement</li>
              </a>
             
            </ul>
        </div>

          <div className="main-faqs" data-aos="slide-up">
            <div>
              <h2> Use of the Website: </h2>
              <br />
              a. You must be at least 18 years old to use the Website or have
              the consent of a legal guardian. <br /><br />
              b. You agree to use the Website for lawful purposes only and in
              compliance with applicable laws, regulations, and these Terms.{" "}
              <br /><br />
              c. You are solely responsible for maintaining the confidentiality
              of your account, login credentials, and any activities conducted
              through your account.
              <br /><br />
              d. You agree not to engage in any unauthorized use, tampering, or
              disruption of the Website, including but not limited to hacking,
              introducing viruses, or any activity that may harm the Website or
              its users.
            </div>

            <div>
              <h2>Intellectual Property:</h2>
              <br />
              a. The Website and its content, including but not limited to text,
              images, logos, trademarks, videos, and graphics, are the property
              of [Company Name] and are protected by intellectual property laws.
              <br /><br />
              b. You may not reproduce, distribute, modify, or use any part of
              the Website or its content without prior written permission from
              [Company Name].
            </div>

            <div>
              <h2>User Submissions:</h2>
              <br /><br />
              a. By submitting any content, information, or materials to the
              Website, you grant [Company Name] a non-exclusive, royalty-free,
              perpetual, worldwide, and irrevocable license to use, reproduce,
              modify, adapt, publish, translate, distribute, and display such
              submissions.
              <br /><br />
              b. You represent and warrant that any content you submit does not
              infringe upon the rights of any third party, including copyright,
              trademark, or privacy rights.
            </div>

            <div>
              <h2> Third-Party Websites and Content:</h2>
              <br />
              a. The Website may contain links to third-party websites or
              display content from third-party sources. [Company Name] does not
              endorse or assume any responsibility for the accuracy,
              reliability, or legality of such websites or content. <br /><br />
              b. Your use of third-party websites or content is at your own
              risk, and you should review the terms and privacy policies of
              those websites before using them.
            </div>

            <div>
              <h2> Disclaimer of Warranties:</h2>
              <br />
              a. The Website and its content are provided on an "as is" and "as
              available" basis without any warranties or representations,
              whether express or implied, including but not limited to
              warranties of merchantability, fitness for a particular purpose,
              or non-infringement. <br /><br />
              b. [Company Name] does not guarantee the accuracy, completeness,
              or reliability of the information provided on the Website. You
              acknowledge and agree that your use of the Website is at your own
              risk.
            </div>

            <div>
              <h2> Limitation of Liability:</h2>
              <br />
              a. To the fullest extent permitted by law, [Company Name] shall
              not be liable for any direct, indirect, incidental, consequential,
              or punitive damages arising out of or in connection with your use
              of the Website. <br /><br />
              b. [Company Name] shall not be liable for any damages or losses
              resulting from interruptions, delays, or errors in the operation
              of the Website or any technical issues or unauthorized access to
              your personal information.
            </div>

            <div>
              <h2>Indemnification: </h2>
              <br />
              You agree to indemnify, defend, and hold harmless [Company Name],
              its officers, directors, employees, and affiliates from any
              claims, losses, damages, liabilities, costs, and expenses,
              including reasonable attorneys' fees, arising out of or related to
              your use of the Website or violation of these Terms.
            </div>

            <div>
              <h2> Termination: </h2>
              <br />
              [Company Name] reserves the right to suspend or terminate your
              access to the Website at any time, without notice or liability,
              for any reason.
            </div>

            <div>
              <h2>Governing Law:</h2>
              <br />
              These Terms shall be governed by and construed in accordance with
              the laws of [Jurisdiction]. Any disputes arising out of or
              relating to these Terms or the use of the Website shall be subject
              to the exclusive jurisdiction of the courts in [Jurisdiction].
            </div>

            <div>
              <h2>Privacy</h2>
              <br />
              Entire Agreement: These Terms constitute the entire agreement
              between you and [Company Name] regarding your use of the Website,
              superseding any prior agreements or understandings.
            </div>

         </div>
                  </div>

              </div>
              <SideBar/><TopBtn/>
    </div>
  );
};

export default TermsConditions;
