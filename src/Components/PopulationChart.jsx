import React from "react";
import styles from '../Styles/Chart.module.css'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";
export default function Chart({ population}) {

    // console.log(population)
    population.sort((a, b) => a["ID Year"] - b["ID Year"]);

    const data = population.map(item => ({
        name: item.Year,
        Population: item.Population
    }));

    const minPopulation = population.reduce((min, current) => {
        return min === null || current.Population < min ? current.Population : min;
    }, null);

    const formatPopulation = (value) => {
        return value.toLocaleString();
    };
    var screenWidth = window.innerWidth;
    if (screenWidth < 701) {
        screenWidth = screenWidth - 0;
    }
    else {
        screenWidth = screenWidth - 300;
    }
    var screenHeight = screenWidth / 2;

    return (
        <div id={styles.parent_container}>
            <LineChart
                width={screenWidth}
                height={screenHeight}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }} r
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[minPopulation, 'auto']} tickFormatter={formatPopulation} width={90} />
                <Tooltip formatter={formatPopulation} />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="Population"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                />
            </LineChart>
        </div>
    );
}