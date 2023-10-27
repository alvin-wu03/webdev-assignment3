/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

const Credits = (props) => {
  const { credits, balance } = props;

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
      <AccountBalance accountBalance={balance}/>
      <br/>
      <Link to="/">Return to Home</Link>
    </div>
  );
}

export default Credits;