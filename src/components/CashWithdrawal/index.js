import {Component} from 'react'

import DenominationItem from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    const name = 'Sarah Williams'
    const letter = name.slice(0, 1)

    return (
      <div className="bg-container">
        <div className="content-container">
          <div className="name-container">
            <div className="name-bg">
              <p className="name">{letter}</p>
            </div>
            <h1 className="full-name">{name}</h1>
          </div>
          <div className="balance-container">
            <p className="balance-description1">Your Balance</p>
            <div className="amount-container">
              <p className="balance">{balance}</p>
              <p className="balance-description2">In Rupees</p>
            </div>
          </div>
          <p className="heading">Withdraw</p>
          <p className="description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                updateBalance={this.updateBalance}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
