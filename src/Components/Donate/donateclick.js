import React, { useState } from 'react';
import '../Donate/Donate.css';

const Donate = () => {
  const [payment, setPayment] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!description) {
      validationErrors.description = 'Description is required';
    }
    if (!payment) {
        validationErrors.payment = 'Payment is required';
      }
      if (!amount) {
        validationErrors.amount = 'Amount is required';
      }
         
    setErrors(validationErrors);
  return (
    <div className='diver'>
      <h1>DONATE</h1>
      <form onSubmit={handleSubmit}>
        <div>
        <label> 
         Payment: </label><br /> 
         <select>
         <input
            type="payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          />
        <option selected> Esewa</option>
        <option selected>Cash</option>
        <option selected> Bank</option>
        
        {errors.payment && <p>{errors.payment}</p>}
        
        </select>
            </div>
       <label>
          DESCRIPTION:<br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        {errors.description && <p>{errors.description}</p>}
        <label >
          AMOUNT:<br />
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
         </label>
        {errors.goal && <p>{errors.goal}</p>}
        <br />
        <br />
        <button type="submit" disabled={Object.keys(errors).length > 0}>
          DONATE
        </button>
      </form>
    </div>
  );
};
}