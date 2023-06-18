import React,{useEffect,useState} from 'react'
import TopBtn from "./TopBtn";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
const PrivacyNotices = () => {

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
          <span className='display-none-reverse'>{">"}</span>
          <span className="about-us-div-header-span display-none-reverse">Pricacy Notices</span>
        </div>

        <div className="mid">
          <h1>Privacy Notices</h1>
          <h3>At World International Investment Plc</h3> We are committed to
          protecting the privacy and confidentiality of your personal
          information. This Privacy Notice explains how we collect, use, and
          safeguard your data when you visit our oil and gas website. Please
          take a moment to review this notice to understand our practices
          regarding your personal information.
        </div>

        <div className="about-us-div-header-img privacy-img">
          <span className="about-us-div-header-img-txt display-none-reverse">
            <h1>Privacy Notices</h1>Please do not hesitate to contact us if you
            have any questions or concerns related to the processing of your
            personal data – contact details are provided in the relevant Privacy
            Notice below.
          </span>
        </div>
        <div className="text-note display-none">
          {" "}
          <h1>Privacy Notices</h1>Please do not hesitate to contact us if you
          have any questions or concerns related to the processing of your
          personal data – contact details are provided in the relevant Privacy
          Notice below.
        </div>
        <div className="text-note">
          <h1> Information We Collect:</h1>
          We may collect various types of information from you, including:
          <ul>
            <li>
              Personal information: This includes your name, contact details,
              email address, phone number, and any other information you
              voluntarily provide to us through forms or inquiries on our
              website.{" "}
            </li>
            <li>
              Log and device information: When you visit our website, we
              automatically collect certain information, such as your IP
              address, browser type, operating system, and the pages you access.
              This helps us analyze trends, administer the site, and improve
              your browsing experience.
            </li>
            <li>
              Cookies and similar technologies: We may use cookies, web beacons,
              and similar technologies to collect data about your interactions
              with our website, including your browsing behavior, preferences,
              and settings. These technologies help us enhance your user
              experience and provide personalized content.
            </li>{" "}
          </ul>
          <h1> Use of Personal Information:</h1>
          We use the personal information we collect for the following purposes:
          <ul>
            <li>
              Communication and responding to inquiries: We may use your contact
              information to communicate with you, respond to your inquiries,
              and provide the information or services you have requested.
            </li>
            <li>
              Website improvement: We analyze the data we collect to understand
              how users interact with our website, identify areas for
              improvement, and enhance the user experience.
            </li>
            <li>
              Marketing and promotional activities: With your consent, we may
              use your personal information to send you marketing
              communications, updates, and promotional offers related to our
              products, services, and industry news. You have the right to opt
              out of such communications at any time.
            </li>
          </ul>
          <h1> Disclosure of Personal Information: </h1>
          We may disclose your personal information to the following parties or
          under the following circumstances: Service providers:
          <ul>
            <li>
              We may share your information with trusted third-party service
              providers who assist us in operating our website, delivering
              services, or conducting business activities on our behalf. These
              providers are contractually bound to protect your personal
              information and use it solely for the purposes specified by us.
            </li>
            <li>
              Compliance with legal obligations: We may disclose your
              information to comply with applicable laws, regulations, legal
              processes, or enforceable governmental requests.
            </li>
            <li>
              Business transfers: In the event of a merger, acquisition, or sale
              of our company or its assets, your personal information may be
              transferred to the acquiring party, subject to their agreement to
              uphold the principles outlined in this Privacy Notice.{" "}
            </li>
          </ul>
          <ul>
            <h1> Data Security:</h1>
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            disclosure, alteration, or destruction. We regularly review our
            security practices and update them as necessary to maintain the
            security and integrity of your data.
            <h1> Your Rights: </h1>You have certain rights regarding your
            personal information, including the right to access, correct, or
            delete your data. If you wish to exercise these rights or have any
            questions or concerns about our privacy practices, please contact us
            using the information provided at the end of this notice.
            <h1> Data Retention: </h1>We will retain your personal information
            for as long as necessary to fulfill the purposes outlined in this
            Privacy Notice unless a longer retention period is required or
            permitted by law.
            <h1> Third-Party Websites:</h1> Our website may contain links to
            third-party websites or services. Please note that we are not
            responsible for the privacy practices or content of such websites.
            We encourage you to review the privacy policies of those third
            parties before providing any personal information.
            <h1> Changes to this Privacy Notice: </h1>We reserve the right to
            update or modify this Privacy Notice at any time without prior
            notice. Any changes will be effective immediately upon posting the
            revised notice on our website. We encourage you to review this
            notice periodically for any updates.
            <h1>Contact Us:</h1>
            If you have any questions, concerns, or requests regarding this
            Privacy Notice or our privacy practices, please contact us at:
            <span className="privacy-span">
              <span> World International Investments Limited</span>
              <span>
                NNPC Bonny Export Terminal Office, Bonny, Rivers State Nigeria.
              </span>
              <span>08034594838</span>
              <span className="red">michaelolympio@gmail.com</span>
            </span>
          </ul>
        </div>
      </div>
      {isVisible && <TopBtn />}
      <SideBar />
    </div>
  );
};

export default PrivacyNotices;
