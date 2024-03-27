// import React, { useState, useEffect } from 'react';
// import styles from '../Styles/Chart.module.css'
// import {
//     LineChart,
//     Line,
//     XAxis,
//     YAxis,
//     CartesianGrid,
//     Tooltip,
//     Legend
// } from "recharts";
// export default function Chart({ population }) {
//     const [screenWidth, setScreenWidth] = useState(window.innerWidth);
//     useEffect(() => {
//         const handleResize = () => {
//             setScreenWidth(window.innerWidth);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
//     population.sort((a, b) => a["ID Year"] - b["ID Year"]);

//     const data = population.map(item => ({
//         name: item.Year,
//         Population: item.Population
//     }));

//     const minPopulation = population.reduce((min, current) => {
//         return min === null || current.Population < min ? current.Population : min;
//     }, null);

//     const formatPopulation = (value) => {
//         return value.toLocaleString();
//     };

//     return (
//         <div id={styles.parent_container}>
//             <LineChart
//                 width={screenWidth - 300}
//                 height={(screenWidth-300)/2}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5
//                 }} r
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis domain={[minPopulation, 'auto']} tickFormatter={formatPopulation} width={90} />
//                 <Tooltip formatter={formatPopulation} />
//                 <Legend />
//                 <Line
//                     type="monotone"
//                     dataKey="Population"
//                     stroke="#8884d8"
//                     activeDot={{ r: 8 }}
//                 />
//             </LineChart>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
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

export default function Chart({ population }) {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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

    // Calculate width based on screen size
    let chartWidth = screenWidth;
    if (screenWidth < 701) {
        chartWidth -= 50; // Subtract 40 instead of 300
    }
    else {
        chartWidth -= 330; // Subtract 40 instead of 300
    }

    return (
        <div id={styles.parent_container}>
            <LineChart
                width={chartWidth}
                height={chartWidth / 2}
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
