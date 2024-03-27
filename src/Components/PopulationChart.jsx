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

const rawData = [
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2021,
        "Year": "2021",
        "Population": 329725481,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2020,
        "Year": "2020",
        "Population": 326569308,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2019,
        "Year": "2019",
        "Population": 324697795,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2018,
        "Year": "2018",
        "Population": 322903030,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2017,
        "Year": "2017",
        "Population": 321004407,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2016,
        "Year": "2016",
        "Population": 318558162,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2015,
        "Year": "2015",
        "Population": 316515021,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2014,
        "Year": "2014",
        "Population": 314107084,
        "Slug Nation": "united-states"
    },
    {
        "ID Nation": "01000US",
        "Nation": "United States",
        "ID Year": 2013,
        "Year": "2013",
        "Population": 311536594,
        "Slug Nation": "united-states"
    }
]
rawData.sort((a, b) => a["ID Year"] - b["ID Year"]);

// Transforming raw data into a format compatible with recharts
const data = rawData.map(item => ({
    name: item.Year,
    Population: item.Population
}));
const minPopulation = rawData.reduce((min, current) => {
    return min === null || current.Population < min ? current.Population : min;
}, null);
const formatPopulation = (value) => {
    return value.toLocaleString();
};

export default function Chart() {
    return (
        <div id={styles.parent_container}>
            <LineChart
                width={900}
                height={500}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[minPopulation, 'auto']} tickFormatter={formatPopulation} />
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