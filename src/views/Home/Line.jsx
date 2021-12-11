import React from "react";
import { Chart } from "react-charts";

const Line = ({ dataset }) => {
  const resultDataSet = dataset.map((data, index) => [index, data]);

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: resultDataSet
      },
    ],
    [resultDataSet]
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" }
    ],
    []
  );

  return (
    <div
      style={{
        width: "350px",
        height: "100px"
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
};

export default Line;
