const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id}>
    <span>{isOnline}</span>
    <img src={avatar} alt="" width="48" />
    <p>{name}</p>
  </li>
);
export default FriendListItem;