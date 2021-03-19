import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem'

const FriendList = ({ friends }) => (
  <ul>
    {friends.map(friend => (
      <FriendListItem
            key={friend.id.toString()}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
        />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FriendList;
