import React from 'react'
import styles from '../Styles/Cryptocard.module.css'
export default function CryptoCard({ data }) {
    return (
        <div id={styles.parent_container}>
            {Object.keys(data.bpi).map(currencyCode => (
                <div key={currencyCode} id={styles.card_container}>
                    <div>
                        <h3 id={styles.description}><span>{data.bpi[currencyCode].description}</span></h3>
                    </div>
                    <div>
                        <p id={styles.code}>Code: <span>{data.bpi[currencyCode].code}</span></p>
                        <p id={styles.text}>Symbol :&nbsp;<span> <p dangerouslySetInnerHTML={{ __html: data.bpi[currencyCode].symbol }}></p></span></p>
                        <p id={styles.text}>Rate :&nbsp; <span>{data.bpi[currencyCode].rate}</span></p>
                        <p id={styles.text}>Rate Float :&nbsp; <span>{data.bpi[currencyCode].rate_float}</span> </p>
                    </div>
                </div>
            ))}
            <div id={styles.description_container}>
                <p id={styles.a_text}>Updated At : &nbsp;<span>{data.time.updated}</span></p>
                <p id={styles.a_text}>Updated At ISO : &nbsp;<span>{data.time.updatedISO}</span></p>
                <p id={styles.a_text}>Updated At UK: &nbsp;<span>{data.time.updateduk}</span></p>
                <p id={styles.a_text}>Chart Name : &nbsp;<span> {data.chartName}</span></p>
                <p id={styles.desc_text}>Disclaimer : &nbsp;<span>{data.disclaimer}</span></p>
            </div>
        </div>
    )
}
