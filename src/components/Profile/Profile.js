//import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from './default.svg';
import styles from './Profile.module.css'

const Profile = ({ avatar, name, tag, location, stats }) => (
  <section className={styles.profile}>
    <div className={styles.box}>
      <img className={styles.img} src={avatar} alt="Аватар пользователя" />
      <p className={styles.title}>{name}</p>
      <p className={styles.subtitle}>&#64;{tag}</p>
      <p className={styles.subtitle}>{location}</p>
    </div>

    <ul className={styles.list}>
      <li className={styles.item}>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li className={styles.item}>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li className={styles.item}>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </section>
);
Profile.defaultProps = {
  avatar: defaultImg,
  location: 'Citizen of the world',
};

Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};
export default Profile;
