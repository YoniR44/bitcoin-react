import React, { Component } from 'react';

import './ContactFilter.css'

class ContactFilter extends Component {
  state = {
    value: ''
  }

  handleChange = async (ev) => {
    await this.setState({ value: ev.target.value })
    this.props.filterContacts(this.state.value)
  }

  render() {
    return (
      <div className="contact-filter">
        <input className="search-bar" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Search Contacts" />
      </div>
    );
  }
}

export default ContactFilter;