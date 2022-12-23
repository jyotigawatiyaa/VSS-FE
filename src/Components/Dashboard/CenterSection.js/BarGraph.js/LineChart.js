import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { XAxis, YAxis } from "recharts";
// // import Axios from 'axios';
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
Chart.register(CategoryScale);
const LineChart = () => {
  const data = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Apr",
      "May",
      "june",
      "july",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales  for 2020 (M)",
        data: [100, 200, 399, 420, 1000, 600, 700, 800, 922, 450, 1100, 1200],
        lineTension: 0.12,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#FFAA33",
        pointBorderWidth: "5",
        pointBackgroundColor: "rgba (255,216,86,0.2 )",
        pointborderWidth: "rgba (255,216,86,0.2 )",
        Width: "28px",
        pointRadius: 1,
        pointHitRadius: 10,
        borderDash: [],
        borderDashOffset: 0.0,
      },
      {
        label: "Sales  for 2021 (M)",
        data: [100, 600, 200, 520, 200, 500, 800, 950, 1000, 1200, 1300],
        borderDash: [],
        borderDashOffset: 0.0,
        pointHoverRadius: 5,
        pointRadius: 1,
        pointHitRadius: 10,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#008000",
        pointBorderWidth: "5",
        pointBackgroundColor: "rgba (255,216,86,0.2 )",
        pointborderWidth: "rgba (255,216,86,0.2 )",
        Width: "28px",
      },
      {
        label: "Sales  for 2022 (M)",
        data: [200, 350, 400, 220, 600, 500, 800, 850, 700, 1000, 1200],
        borderDash: [],
        borderDashOffset: 0.0,
        pointHoverRadius: 5,
        pointRadius: 1,
        pointHitRadius: 10,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "#FF00FF",
        pointBorderWidth: "5",
        pointBackgroundColor: "rgba (255,216,86,0.2 )",
        pointborderWidth: "rgba (255,216,86,0.2 )",
        Width: "28px",
      },
    ],
  };

  const options = {
    title: {
      display: true,
      Text: "sales",
      height: 350,
    },
    scalse: {
      YAxis: [
        {
          ticks: {
            min: 0,
            max: 10,
            stepSize: 100,
          },
        },
      ],
    },
  };

  return (
    <div className="container-Fluid">
      <Line data={data} height={100} width={200} options={options}></Line>
      <XAxis interval={"parserveStartEnd"} />
      <YAxis />
    </div>
  );
};

export default LineChart;
