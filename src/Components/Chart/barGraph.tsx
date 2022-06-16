import React, {FunctionComponent, useEffect, useState} from "react";
import "./index.scss";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

interface Props {
    infected: number;
    recovered: number
    deaths: number;
    country: string;
} 

const BarChart: FunctionComponent<Props> = ({infected, recovered, deaths, country}) => {
    const barChart = 
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
              ],
              hoverBackgroundColor: [
                "rgba(0, 77, 153)",
                "rgba(30, 102, 49)",
                "rgba(255, 51, 51)",
              ],
              data: [
                infected,
                recovered,
                deaths,
              ],
            },
          ],
        }}
        height={"90%"}
        options={{
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: `Current state in ${country}`
                }
            }
        }}
      />

    return (
        <div className="container"> {barChart}</div>
    )
}

export default BarChart