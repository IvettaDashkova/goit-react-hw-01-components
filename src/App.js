//import React from 'react';
import Profile from './components/Profile/Profile';
import user from './user.json';

function App() {
  return (
    <Profile
      avatar={user.avatar}
      name={user.name}
      tag={user.tag}
      location={user.location}
      stats={user.stats}
    />
  );
}

export default App;
