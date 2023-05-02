import React, { useState, useEffect } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles.scss';
import { Charts } from '../Charts/Charts';

export function Dashboard() {
    const [cardInfo, setCardInfo] = useState({});

  useEffect(() => {
    const cardData = localStorage.getItem('Card');
    if (cardData) {
      setCardInfo(JSON.parse(cardData));
    }
  }, []);

  return (
    <div>
      <Cards
        number={cardInfo.number}
        name={cardInfo.name}
        expiry={cardInfo.expiry}
        cvc={cardInfo.cvc}
      />
      <div>
        <Charts />
      </div>
    </div>
  );
}