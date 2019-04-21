import React, { Component } from 'react';

import contactService from '../../services/ContactService'

import ContactList from '../../components/ContactList'
import ContactFilter from '../../components/ContactFilter'

import './ContactPage.css'

class ContactPage extends Component {
    state = { contacts: [], filterBy: { term: null } }

    componentDidMount() {
        contactService.getContacts(this.state.filterBy).then(contacts => {
            this.setState({ contacts })
        })
    }

    filterContacts(filter) {
        this.setState({ filterBy: {term: filter}})
        this.componentDidMount();        
    }

    render() {
        return (
            <div className="contacts-page">
                <ContactFilter filterContacts={this.filterContacts.bind(this)}/>
                <div className="contacts-container">
                    <ContactList contacts={this.state.contacts} />
                </div>
            </div>
        )
    }
}

export default ContactPage;