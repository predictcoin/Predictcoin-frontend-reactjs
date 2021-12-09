import React from "react";
import "./faq.css";

import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <div className="ptc__faq" id='faq'>
      <div className="ptc__faq-heading">
        <h1>Frequently Asked Question</h1>
      </div>

      <Accordion defaultActiveKey="0" className="ptc__heading">
        <Accordion.Item eventKey="1">
          <Accordion.Header className="ptc__heading-content">
            <h2>What is the usecase of PRED?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p className="ptc__main-content">
              PRED is the governance token of Predictcoin and can be used to
              stake and earn more PRED, as well as vote and predict the prices
              of crypto assets.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header className="ptc__heading-content">
            <h2>How to predict the price of Crypto Assets?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p className="ptc__main-content">
              You can start predicting on crypto assets by gaining access to the
              DApp, where you can stake & farm as well.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className="ptc__heading-content">
            <h2>How to launch DApp?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p className="ptc__main-content">
              You can launch the DApp by clicking on the "Launch DApp" if you're
              on desktop or the download icon at the top of this page if you're
              on mobile.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className="ptc__heading-content">
            <h2>What is the total supply of PRED?</h2>
          </Accordion.Header>
          <Accordion.Body>
            <p className="ptc__main-content">
              PRED is a deflationary token with a total capped supply of 100,000
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default FAQ;
