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
    <div>
      {isLoading && <p>Loading...</p>}
      <Chart population={population} />
      <div id={styles.container}>
        <h1> Source : {source.source_name}</h1>
        <hr />
        <div>
          <h3>Span : {source.dataset_name}</h3>
          <h3>Topic : {source.topic}</h3>
          <h3>Sub Topic :{source.subtopic}</h3>
        </div>
        <p>{source.source_description}</p>
      </div>
    </div>
  )
}
