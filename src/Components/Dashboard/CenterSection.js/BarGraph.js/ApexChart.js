import React, { Component  } from "react"; 
// import React , {useEffect ,useState} "react"
import ReactApexChart from "react-apexcharts";
import axios from "axios";
export default class ApexChart extends Component {

//   componentDidMount() {
//     // send HTTP request
//     // save it to the state
// }

  constructor(props) {
    super(props);
    this.state = {
      series: [
        {
          name: "Sales  for 2020 (M)",
          data: [100, 200, 399, 420, 1000, 600, 700, 800, 922, 450, 1100, 1200],
        },
        {
          name: "Sales  for 2021 (M)",
        data: [100, 600, 200, 520, 200, 500, 800, 950, 1000, 1200, 1300 ,700],
        },
        {
          name: "Sales  for 2022 (M)",
        data: [200, 350, 400, 220, 600, 500, 800, 850, 700, 1000, 1200 ,1000 ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
          
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "40%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 10,
          colors: ["transparent"],
          pading:10
        },
        xaxis: {
          categories: [
            "jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
        },
        yaxis: {
          title: {
            text: "$ (thousands)",
          },
        },
        fill: {
          opacity: 4,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="container-Fluid">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={350}
          // width={1000}
        />
      </div>
    );
  }
}
