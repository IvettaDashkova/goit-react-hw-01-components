//import React from 'react';

//components
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';

//data
import user from './user.json';
import statisticalData from './statistical-data.json';
import friends from './friends.json';

function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
