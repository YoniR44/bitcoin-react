import React, { Component } from 'react';

import './TransferFund.css'

class TransferFund extends Component {

    state = {
        amount: 0,
        transferClicked: false
    }

    updateInputValue = (ev) => {
        this.setState({
            amount: ev.target.value
        });
    }

    handleTransfer = () => {
        this.props.onTransferCoins(this.props.contact, this.state.amount)
    }

    render() {
        return (
            <div className="transfer-fund">
                <div>Transfer coins to {this.props.contact.name}</div>
                <form className="transfer-form" onSubmit={this.handleTransfer}>
                    <label>Amount: </label>
                    <input className="transfer-input" onChange={this.updateInputValue} type="number" />
                    <button type="submit">Transfer</button>
                </form>
            </div>
        )
    }
}

export default TransferFund;