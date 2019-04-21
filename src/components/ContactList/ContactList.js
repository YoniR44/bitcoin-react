import React from 'react';

import ContactPreview from '../ContactPreview'

import { Link } from 'react-router-dom'

import plusImg from '../../assets/icons/plus.png'

import './ContactList.css';

const ContactList = (props) => {
  const contactsPreview = props.contacts.map((contact, i) => {
    return (
      <li key={contact._id} className="contacts-list-item">
        <Link to={`/contact/${contact._id}`}>
          <ContactPreview contact={contact} />
        </Link>
      </li>
    )
  });

  return (
    <div className="contacts-list">
      <ul>
        {contactsPreview}
      </ul>
      <Link to="/contact/edit">
        <img className="add-contact-btn" src={plusImg} alt="plus" />
      </Link>
    </div>
  );
}

export default ContactList;