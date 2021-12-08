import React from "react";
import "./partner.css";

import as from "../../assets/partners/as.png";
import babyswap from "../../assets/partners/babyswap-logo.png";
import BscScan from "../../assets/partners/BscScan.png";
import bsctimes from "../../assets/partners/bsctimes.png";
import dapp from "../../assets/partners/dapp.png";
import dappcom from "../../assets/partners/dappcom.png";
import desert_big from "../../assets/partners/desert-big.png";
import desertfinance from "../../assets/partners/desertfinance.png";
import ftx from "../../assets/partners/ftx.png";
import helmet_big from "../../assets/partners/helmet-big.png";
import images from "../../assets/partners/images.png";
import icw from "../../assets/partners/lcw.png";
import nomics from "../../assets/partners/nomics.png";
import squid from "../../assets/partners/squid.png";
import tech_big from "../../assets/partners/tech-big.png";
import techrate from "../../assets/partners/techrate.png";

const Partner = () => {

  return (
    <div className="ptc__partner">
      

      <div className="ptc__partner-heading">
        <h1>Our Partners</h1>
      </div>

      <div className="ptc__partner-image">
        <div className="ptc__partner-image-logo">
          <img src={as} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={babyswap} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={BscScan} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={bsctimes} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={dapp} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={dappcom} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={desert_big} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={desertfinance} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={ftx} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={helmet_big} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={images} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={icw} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={nomics} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={squid} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={tech_big} alt="log" />
        </div>
        <div className="ptc__partner-image-logo">
          <img src={techrate} alt="log" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
