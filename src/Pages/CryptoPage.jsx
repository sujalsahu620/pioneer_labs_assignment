import React, { useState, useEffect } from 'react';
import CryptoCard from '../Components/CryptoCard';

export const CryptoPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        setIsLoading(false);
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1 style={{ fontSize: "30px", textAlign: "center", fontWeight: "600", margin: "15px 0", textTransform: "uppercase" }}>Crypto Currency Price</h1>
      <hr style={{ width: "70%", border: "2px solid black", margin: "5px auto" }} />
      {isLoading && <p>Loading...</p>}
      {data && <CryptoCard data={data} />}
    </div>
  );
};
