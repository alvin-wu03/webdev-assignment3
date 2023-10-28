/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';
import { useState } from 'react';

const Debits = (props) => {
  const { debits, balance, updateDebt, updateBalance } = props;

  const [updateDebtEntry, setDebt] = useState('');
  const [newAmountEntry, setAmount] = useState('');//amount is default 0

  const newEntry = (event) => {
    event.preventDefault();

    if (!updateDebtEntry || !newAmountEntry) {
      return;
    }

    if (isNaN(newAmountEntry)) {
      alert('Amount must be a valid number.');
      return;
    }

    const updatedBalance = balance - parseFloat(newAmountEntry);
    updateBalance(updatedBalance);

    const addEntryDebt = {
      id: debits.length + 1,
      description: updateDebtEntry, // Correct the property name
      amount: newAmountEntry,
      date: new Date()
    };

    updateDebt(addEntryDebt);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Debits</h1>
      <ul style={{ listStyle: 'none', paddingLeft: 0, textalign: 'center' }}>
        {debits.map((debit) => (
          <li key={debit.id}>
            -
            <div>
              <p><strong>Description:</strong> {debit.description}</p>
              <p><strong>Amount:</strong> ${parseFloat(debit.amount).toFixed(2)}</p>
              <p><strong>Date:</strong> {new Date(debit.date).toISOString().split('T')[0]}</p>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <AccountBalance accountBalance={balance} />
      <br />
      <form onSubmit={newEntry}>
        <label>Description:</label>
        <input type="text" onChange={event => setDebt(event.target.value)} />
        <label>Amount:</label>
        <input type="text" onChange={event => setAmount(event.target.value)} />
        <button type="submit">Add Debit</button>
      </form>

      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;