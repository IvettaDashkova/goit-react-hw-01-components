//import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title.toUpperCase()}</h2>

    <ul className={styles.list}>
      {stats.map(stat => (
        <li
          key={stat.id}
          className={styles.item}
          style={{
            backgroundColor: backgroundColorRandom(),
          }}
        >
          <span>{stat.label}</span>
          <span>{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object)
};

function backgroundColorRandom() {
	return "rgba(" + r() + "," + r() + "," + r() + ", 0.8)"
}
function r() {
	return Math.round(255.0 * Math.random());
}
export default Statistics

