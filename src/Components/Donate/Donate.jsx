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

    // If there are no validation errors, perform necessary actions with the form data
    if (Object.keys(validationErrors).length === 0) {
      // All fields are filled, proceed with form submission
      console.log('Description:', description);
      console.log('Payment:',payment);
      console.log('Amount:',amount);
    }
  };
}

export default Donate;

