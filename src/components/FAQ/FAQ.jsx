import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";

import "./faq.css";

const FAQ = () => {
  return (
    <div className="ptc__faq">
      <div className="ptc__faq-heading">
        <h1>Frequently Asked Question</h1>
      </div>

      <div className="ptc__faq-questions">
        <div className='ptc__faq-questions-sub'>
          <h4>What is the use case of PRED?</h4>
          <RiArrowDropDownLine className='icon' color="red" size={30} />
        </div>
      </div>
    </div>
  );
};

export default FAQ;