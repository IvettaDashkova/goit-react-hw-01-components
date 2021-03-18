//import React from 'react';
import Profile from './components/Profile';
import users from './user.json';

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
