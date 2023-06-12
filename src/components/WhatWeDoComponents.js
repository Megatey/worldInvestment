import React from "react";
import WhatWeDo from "./WhatWeDo";
import { Link } from "react-router-dom";
const WhatWeDoComponents = () => {
  return (
    <div className="about-us pad-top">
      <div className="about-us-div">
        <div className="about-us-div-header">
        <Link to={'/'}>   <span className="about-us-div-header-span">Home </span></Link>
          <span> > </span>
          <Link to={'/about-us'}>   <span className="about-us-div-header-span">About Us</span></Link>
          <span> > </span>
          <span className="about-us-div-header-span">What We Do</span>
        </div>
        <div className="padding-wrap">
          <div className="about-us-div-header-img audhi view">
            <span className="about-us-div-header-img-txt marg-down display-none-reverse">
              <h1> WHAT WE DO </h1>
              World International Investment is a global group of energy and
              petrochemical companies that aims to meet the world’s growing need
              for more and cleaner energy solutions in ways that are
              economically, environmentally and socially responsible.
            </span>
          </div>
          <div className="text-note display-none">  <h1> WHAT WE DO </h1>
              World International Investment is a global group of energy and
              petrochemical companies that aims to meet the world’s growing need
              for more and cleaner energy solutions in ways that are
              economically, environmentally and socially responsible.</div>
        </div>
        <div className="text-note text-pad">
          At [Company Name], we are dedicated to providing comprehensive
          solutions and services that empower the oil and gas industry to thrive
          in a challenging and ever-changing landscape. With our deep industry
          expertise and commitment to excellence, we deliver exceptional results
          across various segments of the oil and gas value chain. Exploration
          and Production: We offer a wide range of exploration and production
          services designed to help our clients optimize their operations and
          maximize their resource potential. From geological surveys and
          reservoir analysis to drilling and production optimization, our
          experienced team utilizes advanced technologies and industry best
          practices to unlock new reserves and enhance production efficiency.
          Refining and Processing: Our expertise in refining and processing
          enables us to assist our clients in enhancing their operational
          efficiency, improving product quality, and optimizing their refining
          processes. We provide innovative solutions and advanced technologies
          that enable refineries to meet regulatory requirements, reduce energy
          consumption, and enhance profitability. Distribution and Logistics:
          Efficient distribution and logistics are essential for a seamless
          supply chain in the oil and gas industry. At [Company Name], we
          specialize in developing customized logistics solutions that optimize
          transportation, storage, and distribution networks. Our expertise in
          supply chain management ensures timely and cost-effective delivery of
          products to customers, contributing to improved operational
          performance. Engineering and Construction: We possess extensive
          capabilities in engineering and construction for oil and gas
          infrastructure projects. From concept development and feasibility
          studies to detailed engineering and construction management, our team
          delivers comprehensive solutions tailored to our clients' specific
          requirements. We adhere to the highest industry standards, ensuring
          the successful execution of projects on time, within budget, and with
          a strong focus on safety. Technology and Innovation: Embracing
          innovation is a key driver of success in the oil and gas industry. At
          [Company Name], we are committed to staying at the forefront of
          technological advancements. We invest in research and development to
          develop cutting-edge solutions that address industry challenges. From
          digital transformation and automation to data analytics and artificial
          intelligence, we leverage technology to optimize processes, improve
          decision-making, and enhance overall performance. Health, Safety, and
          Environment: We prioritize the health and safety of our workforce and
          the protection of the environment in all our operations. Our robust
          health, safety, and environmental practices ensure a safe working
          environment, mitigate risks, and contribute to sustainable operations.
          We strive to minimize our environmental impact, promote energy
          efficiency, and explore innovative approaches to reduce emissions and
          promote sustainable practices. Consulting and Advisory Services: In
          addition to our core service offerings, we provide consulting and
          advisory services to assist our clients in navigating complex
          challenges and making informed decisions. Our industry experts offer
          strategic guidance, market insights, and customized solutions that
          empower our clients to adapt to market dynamics, mitigate risks, and
          capitalize on emerging opportunities. At [Company Name], we are
          committed to delivering excellence in every aspect of our work. Our
          comprehensive solutions, industry expertise, and unwavering dedication
          to customer satisfaction make us a trusted partner for oil and gas
          companies seeking innovative and sustainable solutions in a rapidly
          evolving industry.
        </div>
        <div className="text-note text-pad text-bot">
          <h1>Our strategy </h1>Powering Progress sets out our strategy to
          accelerate the transition of our business to net-zero emissions. It is
          designed to deliver value for our shareholders, for our customers and
          for wider society. Powering Progress serves four main goals:
          generating shareholder value, achieving net-zero emissions, powering
          lives and respecting nature. All four goals are critical to our
          future. Together, they integrate sustainability with our business
          strategy. We are transforming our company across our three business
          pillars of Growth, Transition and Upstream. Our Growth pillar includes
          our service stations, traditional and low-carbon fuels, integrated
          power, hydrogen, charging for electric vehicles, nature-based
          solutions, and carbon capture and storage. It focuses on working with
          our customers to accelerate the transition to net-zero emissions. Our
          Transition pillar comprises our Integrated Gas, and our Chemicals and
          Products businesses, and produces sustainable cash flow. Our Upstream
          pillar delivers the cash and returns needed to fund our shareholder
          distributions and the transformation of our company, by providing
          vital supplies of oil and natural gas. Powering Progress is
          underpinned by our core values of honesty, integrity and respect for
          people, and our focus on safety. These include our commitment to doing
          business in an ethical and transparent way. Shell is changing to be
          more focused, more resilient and more competitive – not just for the
          energy system of today, but for the energy system of the future.
        </div>
        <div className="about-us-div-header-img view2">
          <span className="about-us-div-header-img-txt colr display-none-reverse">
            <h1> WHAT WE DO </h1>
            World International Investment is a global group of energy and
            petrochemical companies that aims to meet the world’s growing need
            for more and cleaner energy solutions in ways that are economically,
            environmentally and socially responsible.
          </span>
        </div>
        <div className="text-note display-none">    <h1> WHAT WE DO </h1>
            World International Investment is a global group of energy and
            petrochemical companies that aims to meet the world’s growing need
            for more and cleaner energy solutions in ways that are economically,
            environmentally and socially responsible.</div>
      </div>
    </div>
  );
};

export default WhatWeDoComponents;
