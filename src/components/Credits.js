/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import React, { useState } from 'react';
import "../css/Credits.css"

const Credits = (props) => {
  const { credits, balance, updateBalance, updateCreditList } = props;
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addCredit = (e) => {
    e.preventDefault()
    const updatedBalance = balance + parseFloat(amount);
    updateBalance(updatedBalance);
    const newCredit = {
      id: credits.length + 1,
      description,
      amount,
      date: new Date()
    };
    updateCreditList(newCredit);
  }

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Credits</h1>
      <ul style={{listStyle: 'none', paddingLeft: 0, textalign: 'center'}}>
        {credits.map((credit) => (
        <li key={credit.id}>
          <div className='credit-item'>
            <p><strong>Description:</strong> {credit.description}</p>
            <p><strong>Amount:</strong> ${parseFloat(credit.amount).toFixed(2)}</p>
            <p><strong>Date:</strong> {new Date(credit.date).toISOString().split('T')[0]}</p>
          </div>
        </li>
        ))}
      </ul>
      <br/>
      <div>
        <label htmlFor='description'><strong>Description:</strong></label>
        <input type="text" placeholder="Description" id="description" onChange={e => setDescription(e.target.value)}/>
        <label htmlFor='amount'><strong>Amount:</strong></label>
        <input type="number" placeholder="Amount" id="amount" onChange={e => setAmount(e.target.value)}/>
        <button onClick={addCredit}>Add Credit</button>
      </div>
      <AccountBalance accountBalance={balance}/>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;