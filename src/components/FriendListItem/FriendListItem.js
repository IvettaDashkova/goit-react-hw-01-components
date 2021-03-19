//import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';
import defaultImg from './default.svg';

const FriendListItem = ({ id, avatar, name, isOnline }) => {
  const spanClass = isOnline ? styles.active : styles.disabled;
  return (
    <li className={styles.item} key={id}>
      <span className={spanClass}></span>
      <img className={styles.img} src={avatar} alt="" width="48" />
      <p className={styles.text}>{name}</p>
    </li>
  );
};

FriendListItem.defaultProps = {
  avatar: defaultImg
};

FriendListItem.propTypes = {
  id: PropTypes.string,
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
