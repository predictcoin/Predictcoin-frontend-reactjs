import React from "react";
import { Chart } from "react-charts";

const Line = ({ dataset }) => {
  


  const chunk = arr => {
    const size = 2;
    const chunkedArr = [];

    for (let i = 0; i < arr.length; i++) {
      const last = chunkedArr[chunkedArr.length - 1];
      if (!last || last.length === size) {
        chunkedArr.push([arr[i]]);
      } else {
        last.push(arr[i]);
      }
    }

    return chunkedArr;
  };

  const indexOfDataset = dataset.map((__, index) => {
    return index;
  });

  const resultDataSet = chunk(dataset);

  const resultIndex = chunk(indexOfDataset);

  console.log("RES: ", resultDataSet)

  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        // data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        data: resultDataSet
      },
    ],
    [resultDataSet, resultIndex]
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
