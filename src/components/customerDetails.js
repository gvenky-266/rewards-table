import React, { useState, useEffect } from 'react';
import { fetchTransactionData } from './api';
import RewardsTable from './rewardTable';

const CustomerDetails = ({ customerId }) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState('2025-01');

  useEffect(() => {
    const getTransactionData = async () => {
      try {
        setLoading(true);
        const data = await fetchTransactionData();
        const customer = data.find((customer) => customer.customerId == customerId);
        setTransactions(customer ? customer.transactions : []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getTransactionData();
  }, [customerId]);

  const filteredTransactions = transactions.filter(transaction =>
    transaction.date.startsWith(selectedMonth)
  );
console.log(transactions,'transactions')
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h3>Customer {customerId} Transactions</h3>
      <div>
        <select onChange={(e) => setSelectedMonth(e.target.value)} value={selectedMonth}>
          <option value="2025-01">January 2025</option>
          <option value="2025-02">February 2025</option>
          <option value="2025-03">March 2025</option>
        </select>
      </div>
      {filteredTransactions.length === 0 ? (
        <p>No transactions available for the selected month.</p>
      ) : (
        <RewardsTable transactions={filteredTransactions} />
      )}
    </div>
  );
};

export default CustomerDetails;
