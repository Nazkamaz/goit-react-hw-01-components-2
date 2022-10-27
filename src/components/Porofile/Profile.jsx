import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
import styles from './Profile.module.css';

const Profile = ({username, tag, location, avatar, stats}) => {
    return (<Container>
        <div className={styles.profile}>
          <div className="description">
            <img
              src={avatar}
              alt={username}
              className="avatar"
            />
            <h2 className="name">{username}</h2>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.location}>{location}</p>
          </div>
    
          <ul className={styles.stats}>
            <li className={styles.statsItem}>
              <span className="label">Followers</span>
              <span className="quantity">  {stats.followers}</span>
            </li>
            <li className={styles.statsItem}>
              <span className="label">Views</span>
              <span className="quantity">  {stats.views}</span>
            </li>
            <li className={styles.statsItem}>
              <span className="label">Likes</span>
              <span className="quantity">  {stats.likes}</span>
            </li>
          </ul>
        </div>
        </Container>
      );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.node.isRequired,
    stats: PropTypes.object.isRequired,
}

export default Profile

