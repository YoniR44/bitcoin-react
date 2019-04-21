import React, { Component } from 'react';

import contactService from '../../services/ContactService'
import userService from '../../services/UserService'

import TransferFund from '../../components/TransferFund'
import MovesList from '../../components/MovesList'

import imgAvatar from '../../assets/img_avatar.png'
import backImg from '../../assets/icons/back.png'
import editImg from '../../assets/icons/edit.png'

import { Link } from 'react-router-dom'

import './ContactDetailsPage.css'

class ContactDetails extends Component {

  state = { contact: {}, moves: null }

  componentWillMount() {
    let moves = userService.getUser().moves;
    this.setState({ moves: moves })
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    contactService.getContactById(id).then(contact => {
      this.setState({ contact })
    })
  }

  onTransferCoins(contact, amount) {
    if (contact && amount > 0) {
      userService.addMove(contact, amount);
    }
  }

  render() {
    const contact = this.state.contact
    const moves = this.state.moves
    const avatar = contact.picture || imgAvatar

    return (
      <div className="contact-details">
        <div className="details-nav">
          <Link to={`/contact`}>
            <img className="back-btn" src={backImg} alt="Person" width="24" height="24" />
          </Link>
          <Link to={`/contact/edit/${contact._id}`}>
            <img className="edit-btn" src={editImg} alt="Person" width="24" height="24" />
          </Link>
        </div>
        <div className="contact-details-body">
          <img src={avatar} alt="Person" width="96" height="96" />
          <div className="contact-details-row">Name: {contact.name}</div>
          <div className="contact-details-row">Phone: {contact.phone}</div>
          <div className="contact-details-row">Email: {contact.email}</div>
        </div>
        <TransferFund contact={contact} onTransferCoins={this.onTransferCoins.bind(this)} />
        <MovesList title={'Your Moves:'} moves={moves} contact={contact}/>
      </div>
    )
  }

}

export default ContactDetails;