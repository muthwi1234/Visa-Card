// VisaCard.js
import React, { useState } from 'react';

const VisaCard = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'cardNumber') setCardNumber(value);
    else if (name === 'cardHolder') setCardHolder(value);
    else if (name === 'expiryDate') setExpiryDate(value);
    else if (name === 'cvv') setCVV(value);
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 to-pink-600 p-8 rounded-md max-w-md mx-auto">
      <div className="text-3xl font-bold mb-7 text-white">Visa Card</div>
      <div className="bg-white p-7 rounded-md mb-6">
        <div className="text-gray-600 mb-2">Card Number</div>
        <input
          type="text"
          name="cardNumber"
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Enter card number"
          value={cardNumber}
          onChange={handleInputChange}
        />
      </div>
      <div className="flex justify-between mb-6">
        <div className="text-gray-600">Card Holder</div>
        <div className="text-gray-600">Valid Thru</div>
      </div>
      <div className="flex justify-between">
        <input
          type="text"
          name="cardHolder"
          className="w-3/5 p-3 border border-gray-300 rounded-md"
          placeholder="Card Holder"
          value={cardHolder}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="expiryDate"
          className="w-1/4 p-3 border border-gray-300 rounded-md"
          placeholder="MM/YY"
          value={expiryDate}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="cvv"
          className="w-1/4 p-3 border border-gray-300 rounded-md"
          placeholder="CVV"
          value={cvv}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default VisaCard;
