import PropTypes from 'prop-types';
import styles from './FriendList.module.css';
import Container from 'components/Container/Container';
import FriendListItem from './FriendListItem';

const FriendList = ({friends}) => {
    return (<Container>
        <ul className={styles.friendList}>
            {friends.map(({avatar, name, isOnline, id}) => 
            (<li key={id} className={styles.item}>
                <FriendListItem
                avatar={avatar}
                  name={name}
                  isOnline={isOnline}
                  id={id}
                  />
                </li>))}  
    </ul>
    </Container>);
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      })
    ).isRequired,
  };
  
  export default FriendList
