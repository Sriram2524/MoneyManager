import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="money-detauils-con">
      <div className="balance-con">
        <div className="balance-img-con">
          <img
            className="balance-img"
            alt="balance"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          />
        </div>
        <div className="text-con">
          <p className="text">Your Balance</p>
          <p data-testid="balanceAmount" className="money">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-con">
        <div className="balance-img-con">
          <img
            className="balance-img"
            alt="income"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          />
        </div>
        <div className="text-con">
          <p className="text">Your Income</p>
          <p data-testid="incomeAmount" className="money">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-con">
        <div className="balance-img-con">
          <img
            className="balance-img"
            alt="expenses"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          />
        </div>
        <div className="text-con">
          <p className="text">Your Expenses</p>
          <p data-testid="expensesAmount" className="money">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
