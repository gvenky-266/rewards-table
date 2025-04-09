import { render, screen } from '@testing-library/react';
import CustomerList from '../components/customerList';

test('renders customer list', () => {
  const customers = [
    { customerId: 1 },
    { customerId: 2 },
  ];
  render(<CustomerList customers={customers} onSelectCustomer={() => {}} />);
  expect(screen.getByText('Customer 1')).toBeInTheDocument();
  expect(screen.getByText('Customer 2')).toBeInTheDocument();
});
