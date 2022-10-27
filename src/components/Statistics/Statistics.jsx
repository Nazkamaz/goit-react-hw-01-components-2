import PropTypes from 'prop-types';
import styles from 'components/Statistics/Statistics.module.css';
import Container from 'components/Container/Container';
import StatisticsItem from './StatisticsItem';

const Statistics = ({title,stats}) => {
    return  (<Container>
        <section className={styles.statistics}>
        {title && <h2 className={styles.title}>{title}</h2>}

  <ul className={styles.list}>
       {stats.map(({ id, label, percentage }) => (
        <li className={styles.item} key={id}>
          <StatisticsItem label={label} percentage={percentage} />
        </li>
      ))}
  </ul>
</section>
  </Container>
  )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        percentage: PropTypes.number.isRequired,
      })
    ).isRequired,
  };
  
  export default Statistics;



