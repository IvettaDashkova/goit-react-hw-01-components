//components
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import FriendList from '../FriendList/FriendList';
//data
import user from '../Profile/user.json';
import statisticalData from '../Statistics/statistical-data.json';
import friends from '../FriendList/friends.json';

const Sidebar = props => (
  <div>
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticalData} />
    <FriendList friends={friends} />
  </div>
);
export default Sidebar;
