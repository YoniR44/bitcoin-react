import React, { Component } from 'react';

import contactService from '../../services/ContactService'

import imgAvatar from '../../assets/img_avatar.png'
import backImg from '../../assets/icons/back.png'
import deleteImg from '../../assets/icons/delete.png'

import { Link } from 'react-router-dom'

import './ContactEdit.css';

class ContactEdit extends Component {

    state = {}

    componentDidMount() {
        const id = this.props.match.params.id;

        if (id) {
            contactService.getContactById(id).then(contact => {
                let { _id, email, name, phone } = contact
                this.setState({ _id, email, name, phone })
            })
        } else {
            contactService.getEmptyContact().then(contact => {
                console.log('contact', contact);

                let { email, name, phone } = contact
                this.setState({ email, name, phone })
            })
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        contactService.saveContact(this.state).then(contact => {
            console.log('Saved Successfully');
        })
    }

    handleDelete = (e) => {
        const id = this.props.match.params.id;

        contactService.deleteContact(id).then(() => {
            console.log('Deleted Succesfully');
        })
    }

    render() {
        const contact = this.state
        const avatar = contact.picture || imgAvatar
        let deleteBtn;

        if (contact._id) {
            deleteBtn = <Link to="/contact">
                            <img className="delete-btn" onClick={this.handleDelete} src={deleteImg} alt="Delete" width="24" height="24" />
                        </Link>;
        } else deleteBtn = '';

        return (
            <form className="contacts-edit" onSubmit={this.handleSubmit}>
                <div className="edit-nav">
                    <Link to="/contact">
                        <img className="back-btn" src={backImg} alt="Back" width="24" height="24" />
                    </Link>
                    {deleteBtn}
                </div>
                <img src={avatar} alt="Person" width="96" height="96" />
                <div className="input-item">
                    <label>Name: </label>
                    <input className="input" name="name" defaultValue={contact.name} type="name" onChange={this.handleChange} placeholder="Name" />
                </div>
                <div className="input-item">
                    <label>Phone: </label>
                    <input className="input" name="phone" defaultValue={contact.phone} type="phone" onChange={this.handleChange} placeholder="Phone" />
                </div>
                <div className="input-item">
                    <label>Email: </label>
                    <input className="input" name="email" defaultValue={contact.email} type="email" onChange={this.handleChange} placeholder="Email" />
                </div>
                <button className="btn" type="submit">Save</button>
            </form>
        );
    }
}

export default ContactEdit;