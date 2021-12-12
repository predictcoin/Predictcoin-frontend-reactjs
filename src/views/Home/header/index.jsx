import React from "react";

import 'animate.css';
import "./header.css";

import vr from "../../../assets/pics/onlaptop.png";

const Header = () => {
  return (
    <div className="ptc__header section__padding" id="home">
      <div className="ptc__header-content animate__animated animate__slideInLeft">
        <div className="">
          <h1>
            Discover Predictcoin, <br /> Price Prediction Redefined
          </h1>
          <h2>
            Predictcoin is the World's First Crypto-Assets Price Prediction DAO<br />{" "}
            where Winners & Losers earn.
          </h2>
        </div>

        {/* Button */}
        <div className="ptc__header-content_button">
          <button className="ptc__header-button_out ptc__header-button" type="button">
            Start Predicting
          </button>

          <button className="ptc__header-button_pred ptc__header-button" type="button">
            Earn PRED
          </button>
         
          <button className="ptc__header-button_bid ptc__header-button" type="button">
            Earn BID
          </button>

          <button className="ptc__header-button_bnb ptc__header-button" type="button">
            Earn BNB
          </button>
        </div>
      </div>

      <div className="ptc__header-content-image animate__animated animate__slideInRight">
        <img src={vr} alt="vr" className="image__fluid" />
      </div>
    </div>
  );
};

export default Header;
