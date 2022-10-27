import Profile from './Porofile/Profile';
import user from '../data/user';
import Statistics from './Statistics/Statistics';
import statisticsData from '../data/statistics';
import FriendList from './FriendList/FriendList';
import friends from '../data/friends';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../data/transactions'


export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        />
      <Statistics title="Upload stats" stats={statisticsData} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </div>
  );
};
