import React from 'react';

const CustomerList = ({ customers, onSelectCustomer }) => {
  return (
    <div>
      <h3>Customer List</h3>
      <ul>
        {customers.map((customer) => (
          <li
            key={customer.customerId}
            onClick={() => onSelectCustomer(customer.customerId)}
          >
            Customer {customer.customerId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomerList;
