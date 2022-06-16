import React, {FunctionComponent, useEffect, useState} from "react";
import "./index.scss";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

interface Props {
    infected: number[];
    deaths: number[];
    dates: Date[];
} 

const LineChart: FunctionComponent<Props> = ({infected, deaths, dates}) => {
    const lineChart = dates.length ? (
        <Line
            data={{
                labels: dates,
                datasets: [
                    {
                        data: infected,
                        label: "Infected",
                        borderColor: "rgba(75,192,192,1)",
                        fill: false,
                    },
                    {
                        data: deaths,
                        label: "Deaths",
                        borderColor: "#742774",
                        fill: false,
                    },
                ],
            }}
            height={"90%"}
        />
    ) : null;

    return (
        <div className="container"> {lineChart}</div>
    )
}

export default LineChart