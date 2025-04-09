import React from 'react';
import { calculatePoints } from '../utils/calculatePoints';

const RewardsTable = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions available for the selected month.</p>;
  }

  return (
    <div>
      <h3>Transaction Rewards Points</h3>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Points Earned</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => {
            const points = calculatePoints(transaction.amount);
            return (
              <tr key={transaction.transactionId}>
                <td>{transaction.transactionId}</td>
                <td>${transaction.amount}</td>
                <td>{points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RewardsTable;
