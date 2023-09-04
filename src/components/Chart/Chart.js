import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  let maximumValue = Math.max(
    ...props.items.map((item) => {
      return item.value;
    })
  );
  //   console.log(maximumValue);
  return (
    <div className="chart">
      {props.items.map((item, index) => {
        return (
          <ChartBar
            maxValue={maximumValue}
            value={item.value}
            key={item.label}
            label={item.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};
export default Chart;
