//import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
            {items.map(item => {
                 let newStr = item.type[0].toUpperCase() + item.type.slice(1);
                return (
                    <tr key={item.id}>
                        <td>{newStr}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
                    </tr>
                )
            })}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TransactionHistory;