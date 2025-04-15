import React from 'react';

const CustomerList = ({ customers, onSelectCustomer }) => {
  return (
    <div>
      <h3>Select a Customer</h3>
      <select onChange={(e) => onSelectCustomer(e.target.value)} defaultValue="">
        <option value="" disabled>Select a customer</option>
        {customers.map((customer) => (
          <option key={customer.customerId} value={customer.customerId}>
            Customer {customer.customerId}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomerList;
