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
      {isLoading && <p>Loading...</p>}
      {data && <CryptoCard data={data} />}
    </div>
  );
};
