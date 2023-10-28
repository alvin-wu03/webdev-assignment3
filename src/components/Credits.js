/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  const { credits, balance, updateBalance, updateCreditList } = props;

  const addCredit = (e) => {
    e.preventDefault()
    const updatedBalance = balance + parseFloat(document.getElementById('amount').value);
    updateBalance(updatedBalance);
    const newCredit = {
      id: credits.length + 1,
      description: document.getElementById('description').value,
      amount: document.getElementById('amount').value,
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
          -
          <div>
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
        <input type="text" placeholder="Description" id="description" />
        <label htmlFor='amount'><strong>Amount:</strong></label>
        <input type="number" placeholder="Amount" id="amount" />
        <button onClick={addCredit}>Add Credit</button>
      </div>
      <AccountBalance accountBalance={balance}/>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;