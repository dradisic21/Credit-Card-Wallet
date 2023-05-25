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
    <div className='dashboard-container'>
      {/* <Cards
        number={cardInfo.number}
        name={cardInfo.name}
        expiry={cardInfo.expiry}
        cvc={cardInfo.cvc}
      /> */}
      <div>
        {/* <Charts /> */}
      </div>
      <div>
        <div className=''>
          <h4>Transport</h4>
          <p>$195.25</p>
        </div>
        <div>
          <h4>Shopping</h4>
          <p>$230.50</p>
        </div>
        <div>
          <h4>Subscriptions</h4>
          <p>$1.125.00</p>
        </div>
      </div>
    </div>
  );
}