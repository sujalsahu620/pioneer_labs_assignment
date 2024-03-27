import React from 'react'
import Chart from '../Components/PopulationChart'
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from '../Styles/PopulationPage.module.css'

export default function PopulationPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [population, setPopulation] = useState([])
  const [source, setSource] = useState([])

  useEffect(() => {
    axios.get('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
      .then((res) => {
        setPopulation(res.data.data);
        setSource(res.data.source[0].annotations)
        setIsLoading(false);
      })
  }, [])
  // console.log(source)

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%", padding: "15px" }}>
      <h1 style={{ fontSize: "30px", textAlign: "center", fontWeight: "600", margin: "15px 0", textTransform: "uppercase" }}>Population Chart</h1>
      <hr style={{ width: "70%", border: "2px solid black", margin: "5px auto" }} />
      {isLoading && <p>Loading...</p>}
      <Chart population={population} />
      <div id={styles.container}>
        <h1> Source :<span> {source.source_name}</span></h1>
        <h3>Span : &nbsp;<span>{source.dataset_name}</span></h3>
        <h3>Topic :&nbsp; <span>{source.topic}</span></h3>
        <h3>Sub Topic :&nbsp;<span>{source.subtopic}</span></h3>
        <h3>Description : &nbsp;<span>{source.source_description}</span></h3>
      </div>
    </div>
  )
}
