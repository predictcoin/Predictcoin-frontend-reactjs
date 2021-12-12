import React from "react";
import HorizontalSlider from "react-horizontal-slider";

const Slider = ({items1}) => {
  return (
    <div>
      <HorizontalSlider
        title="Menu 1"
        data={items1}
        height={300}
        width={300}
        id={1}
      />
    </div>
  );
};

export default Slider;
