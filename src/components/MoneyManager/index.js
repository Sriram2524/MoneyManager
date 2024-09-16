import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]
const initialHistoryDetails = []
// Write your code here
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    optionId: transactionTypeOptions[0].optionId,
    historyDetails: initialHistoryDetails,
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onAmountChange = event => {
    this.setState({amount: event.target.value})
  }

  onTypeChange = event => {
    this.setState({optionId: event.target.value})
  }

  onAddTransactons = event => {
    event.preventDefault()
    const {title, amount, optionId, historyDetails} = this.state
    const typeOption = transactionTypeOptions.find(
      each => each.optionId === optionId,
    )
    const {displayText} = typeOption
    const parseamount = parseInt(amount)
    const newHistory = {
      id: uuidv4(),
      title,
      amount: parseamount,
      type: displayText,
    }
    const unpdated = [...historyDetails, newHistory]
    this.setState({
      historyDetails: unpdated,
      title: '',
      amount: '',
      optionId: transactionTypeOptions[0].optionId,
    })
  }

  clickDelete = id => {
    const {historyDetails} = this.state
    const filteredDetails = historyDetails.filter(each => each.id !== id)
    this.setState({historyDetails: filteredDetails}, this.updateMoneyDeails)
  }

  getExpenses = () => {
    const {historyDetails} = this.state
    let expensesAmount = 0

    historyDetails.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  getIncome = () => {
    const {historyDetails} = this.state
    let incomeAmount = 0

    historyDetails.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  getBalance = () => {
    const {historyDetails} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0
    historyDetails.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      } else {
        expensesAmount += eachTransaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  render() {
    const {title, amount, optionId} = this.state
    const {historyDetails} = this.state
    const balanceAmount = this.getBalance()
    const incomeAmount = this.getIncome()
    const expensesAmount = this.getExpenses()
    return (
      <div className="bg-container">
        <div className="text-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your
            <span className="color-text">Money Manager</span>
          </p>
        </div>

        <MoneyDetails
          balance={balanceAmount}
          income={incomeAmount}
          expenses={expensesAmount}
        />

        <div className="tra-and-history-con">
          <div className="add-tra-con">
            <h1 className="tran-heading">Add Transaction</h1>
            <form onSubmit={this.onAddTransactons} className="form">
              <label htmlFor="titleLabel" className="label">
                TITLE
              </label>
              <input
                onChange={this.onTitleChange}
                id="titleLabel"
                className="input"
                value={title}
                placeholder="TITLE"
                type="text"
              />
              <label htmlFor="amountLabel" className="label">
                AMOUNT
              </label>
              <input
                onChange={this.onAmountChange}
                id="amountLabel"
                className="input"
                value={amount}
                placeholder="AMOUNT"
                type="text"
              />
              <label htmlFor="typeLabel" className="label">
                TYPE
              </label>
              <select
                onChange={this.onTypeChange}
                id="typeLabel"
                value={optionId}
                className="input"
              >
                {transactionTypeOptions.map(option => (
                  <option value={option.optionId} key={option.optionId}>
                    {option.displayText}
                  </option>
                ))}
              </select>
              <div>
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="history-con">
            <h1 className="history">History</h1>

            <ul className="unordered-history">
              <li className="listt">
                <p className="title">Title</p>
                <p className="amount">Amount</p>
                <p className="type">Type</p>
              </li>
              {historyDetails.map(each => (
                <TransactionItem
                  clickDelete={this.clickDelete}
                  key={each.id}
                  eachHistoryDetails={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
