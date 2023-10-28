/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Debits = (props) => {
  const { debits, balance } = props;

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Debits</h1>
      <ul style={{listStyle: 'none', paddingLeft: 0, textalign: 'center'}}>
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
      <br/>
      <AccountBalance accountBalance={balance}/>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Debits;