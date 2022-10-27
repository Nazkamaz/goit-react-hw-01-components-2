import PropTypes from 'prop-types';
import Container from 'components/Container/Container';
import TransactionItem from './TransactionItem';
import styles from 'components/TransactionHistory/TransactionHistory.module.css'

const TransactionHistory = ({items}) => {
    return(
        <Container>
            <table className={styles.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({ id, type, amount, currency }) => (
            <TransactionItem
              key={id}
              type={type}
              amount={amount}
              currency={currency}
            />
          ))}
  </tbody>
</table>
         </Container>   
    )
}

TransactionHistory.propTypes = {
   items: PropTypes.arrayOf(
        PropTypes.shape({
id: PropTypes.string.isRequired,
type: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
        })
    )
}

export default TransactionHistory