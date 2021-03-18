//import React from 'react';
import PropTypes from 'prop-types';
import defaultImg from '../components/default.svg';

const Profile = ({ avatar, name, tag, location, stats }) => (
  <div>
    <div>
      <img src={avatar} alt="Аватар пользователя" />
      <p>{name}</p>
      <p>{tag123}</p>
      <p>{location}</p>
    </div>

    <ul>
      <li>
        <span>Followers</span>
        <span>{stats.followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{stats.views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{stats.likes}</span>
      </li>
    </ul>
  </div>
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
