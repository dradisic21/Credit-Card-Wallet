import React, { useState } from 'react';
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/lib/styles.scss';
import "./AddCards.scss"

export function AddCards () {
  const [data, setData] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    localStorage.setItem("Card", JSON.stringify(data));
    setData({
      number: '',
      expiry: '',
      cvc: '',
      name: '',
      focus: '',
    });
    console.log(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setData(prevData => ({ ...prevData, [name]: value }));
  }

  const handleInputFocus = (e) => {
    const { name } = e.target;
    setData({ ...data, focus: name });
  }
  const handleInputBlur = () => {
    setData({ ...data, focus: '' });
  }  



  return (
    <div className="card-form">
      <div className='card-form__container'>
        <Cards
          className="card-form__position"
          number={data.number}
          name={data.name}
          focus={data.focus}
          expiry={data.expiry}
          cvc={data.cvc}
        />
        <form className="card-form__form" onSubmit={handleSubmitForm}>
          <div className="card-form__form-group">
            <label htmlFor="number">Card Number</label>
            <Input
              type="tel"
              name="number"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={data.number}
              placeholder="Card Number"
            />
          </div>
          <div className="card-form__form-group">
            <label htmlFor="name">Holder Name</label>
            <Input
              type="text"
              name="name"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={data.name}
              placeholder="Cardholder Name"
            />
          </div>
          <div className="card-form__form-group">
            <label htmlFor="expiry">Expiration Date</label>
            <Input
              type="tel"
              name="expiry"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={data.expiry}
              placeholder="MM/YY"
            />
          </div>
          <div className="card-form__form-group">
            <label htmlFor="cvc">CVC</label>
            <Input
              type="tel"
              name="cvc"
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              value={data.cvc}
              placeholder="CVC"
            />
          </div>
          <Button type="submit" className="add-button" name="Add Card" />
        </form>
      </div>
    </div>
  );
};
