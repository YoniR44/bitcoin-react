import React, { Component } from 'react';

import bitcoinService from '../../services/BitcoinService'
import userService from '../../services/UserService'

import userStore from '../../stores/UserStore'

// CMPS
import MovesList from '../../components/MovesList'

// IMAGES
import coinsImg from '../../assets/icons/coins.png'
import bitcoinImg from '../../assets/icons/bitcoin.png'

import './HomePage.css'

class HomePage extends Component {
    state = {
        // user: userService.getUser(),
        user: userStore.getLoggedUser,
        bitcoinRate: 0,
        moves: [],
    }

    componentWillMount() {
        if (!this.state.user) {
            this.props.history.push(`/signup`)
        } else {
            let moves = this.state.user.moves;
            this.setState({ moves })
        }
    }

    async componentDidMount() {
        if (!this.state.user) return null;
        const bitcoinRate = await bitcoinService.getRate(this.state.user.coins)
        this.setState({ bitcoinRate })
    }

    render() {
        if(!this.state.user) return '';

        const user = this.state.user;
        const moves = this.state.moves;

        return (
            <div className="home-page">
                <div className="user-details">
                    <div className="user-name">Hello {user.name}!</div>
                    <div className="user-coins-count">
                        <img src={coinsImg} alt="coins" width="24px" height="24px" /> Coins: {this.state.user.coins}
                    </div>
                    <div className="user-coins-rate">
                        <img src={bitcoinImg} alt="bitcoin" width="24px" height="24px" /> BTC: {this.state.bitcoinRate}
                    </div>
                </div>
                <MovesList title={'Your Last 3 Moves:'} moves={moves} />
            </div>
        )
    }
}

export default HomePage;