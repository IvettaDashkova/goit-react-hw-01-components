//import React from 'react';

//components
import Sidebar from '../Sidebar/Sidebar';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import styles from './App.module.css'

//data
import transactions from '../TransactionHistory/transactions.json';

function App() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
