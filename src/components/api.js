export const fetchTransactionData = async () => {
    return [
      {
        customerId: 1,
        transactions: [
          { transactionId: 'T1', amount: 120, date: '2025-01-15' },
          { transactionId: 'T2', amount: 80, date: '2025-01-22' },
          { transactionId: 'T3', amount: 50, date: '2025-01-29' },
        ],
      },
      {
        customerId: 2,
        transactions: [
          { transactionId: 'T4', amount: 200, date: '2025-02-10' },
          { transactionId: 'T5', amount: 45, date: '2025-02-15' },
        ],
      },
    ];
  };
  