import React, { Component } from 'react';

// STORES
import userStore from '../../stores/UserStore'

// import userService from '../../services/UserService'

// IMAGES
import bitcoinImg from '../../assets/icons/bitcoin.png'

import './SignupPage.css'

class SignupPage extends Component {
    state = {
        name: '',
    }

    handleSubmit = (e) => {
        e.preventDefault()

        userStore.createAndSetUser(this.state.name)
        // userService.signup(this.state.name)
        this.props.history.push(`/`)  
    }

    updateInputValue(ev) {
        this.setState({
            name: ev.target.value
        });
    }

    render() {
        return (
            <div className="signup-page" onSubmit={this.handleSubmit}>
                <form className="signup-form">
                    <img src={bitcoinImg} alt="" height="96" width="96" />
                    <div>
                        <label htmlFor="name">Please enter your name: </label>
                        <input className="user-input" type="text" value={this.state.name} onChange={ev => this.updateInputValue(ev)}/>
                    </div>
                    <button type="submit">Signup</button>
                </form>
            </div>
        )
    }
}

export default SignupPage;