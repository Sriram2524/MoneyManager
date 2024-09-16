// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachHistoryDetails, clickDelete} = props
  const {id, title, amount, type} = eachHistoryDetails
  const onClickDelete = () => {
    clickDelete(id)
  }
  return (
    <li className="list">
      <p className="para">{title}</p>
      <p className="para">Rs {amount}</p>
      <p className="para">{type}</p>
      <button
        onClick={onClickDelete}
        data-testid="delete"
        type="button"
        className="delete-button"
      >
        <img
          className="delete-img"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}
export default TransactionItem
