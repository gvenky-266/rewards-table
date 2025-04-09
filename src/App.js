import React, { useState, useEffect } from 'react';
import { fetchTransactionData } from './components/api';
import CustomerList from './components/customerList';
import CustomerDetails from './components/customerDetails';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  useEffect(() => {
    const getTransactionData = async () => {
      const data = await fetchTransactionData();
      setCustomers(data);
    };
    getTransactionData();
  }, []);

  const handleCustomerSelect = (customerId) => {
    setSelectedCustomer(customerId);
  };

  return (
    <div className="App">
      <CustomerList customers={customers} onSelectCustomer={handleCustomerSelect} />
      {selectedCustomer && <CustomerDetails customerId={selectedCustomer} />}
    </div>
  );
}

export default App;
