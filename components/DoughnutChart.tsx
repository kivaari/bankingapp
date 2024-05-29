"use client"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

    const data = {
        datasets: [
            {
                label: "Banks",
                data: [2543, 15432, 25932],
                backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
            }
        ],
        labels: ['Tinkoff', 'Alfa Bank', 'Sber']
    }

    return <Doughnut
        options={{
            cutout:'60%',
            plugins: {
                legend: {
                    display: false
                }
            }
        }}
        data={data} 
    />
}

export default DoughnutChart