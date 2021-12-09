import React from "react";
import "./partner.css";

import as from "../../../assets/partners/as.png";
import babyswap_logo from "../../../assets/partners/babyswap-logo.png";
import bscScan from "../../../assets/partners/BscScan.png";
import bsctimes from "../../../assets/partners/bsctimes.png";
import dapp from "../../../assets/partners/dapp.png";
import dappcom from "../../../assets/partners/dappcom.png";
import desert_big from "../../../assets/partners/desert-big.png";
import desertfinance from "../../../assets/partners/desertfinance.png";
import ftx from "../../../assets/partners/ftx.png";
import helmet_big from "../../../assets/partners/helmet.png";
import images from "../../../assets/partners/images.png";
import lcw from "../../../assets/partners/lcw.png";
import nomics from "../../../assets/partners/nomics.png";
import squid from "../../../assets/partners/squid.png";
import tech_big from "../../../assets/partners/tech-big.png";
import techrate from "../../../assets/partners/techrate.png";

const Partner = () => {
  return (
    <div className="ptc__partner" id='partner'>
      <div className="ptc__partner-heading">
        <h1>Our Partners</h1>
      </div>

      <div className="ptc__partner-images">
        <div className="ptc__partner-image">
            <img src={as} alt="as" />
        </div>

        <div className="ptc__partner-image">
            <img src={babyswap_logo} alt="babyswap_logo" />
        </div>

        <div className="ptc__partner-image">
            <img src={bscScan} alt="bscScan" />
        </div>

        <div className="ptc__partner-image">
            <img src={bsctimes} alt="bsctimes" />
        </div>

        <div className="ptc__partner-image">
            <img src={dapp} alt="dapp" />
        </div>

        <div className="ptc__partner-image">
            <img src={dappcom} alt="dappcom" />
        </div>

        <div className="ptc__partner-image">
            <img src={desert_big} alt="desert_big" />
        </div>

        <div className="ptc__partner-image">
            <img src={ftx} alt="ftx" />
        </div>

        <div className="ptc__partner-image">
            <img src={helmet_big} alt="helmet_big" />
        </div>

        <div className="ptc__partner-image">
            <img src={images} alt="images" />
        </div>

        <div className="ptc__partner-image">
            <img src={lcw} alt="lcw" />
        </div>

        <div className="ptc__partner-image">
            <img src={nomics} alt="nomics" />
        </div>

        <div className="ptc__partner-image">
            <img src={squid} alt="squid" />
        </div>

        <div className="ptc__partner-image">
            <img src={tech_big} alt="tech_big" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
