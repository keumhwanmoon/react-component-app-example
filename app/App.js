import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class ContactsApp extends Component {
    render() {
        return (
            <div>
                <SearchBar />
                <ContactsList contacts={this.props.contacts}/>
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends Component {
    render() {
        return <input type="search" placeholder="search" />
    }
}

class ContactsList extends Component {
    render() {
        return (
            <ul>
                {this.props.contacts.map(
                    (contact) => <ContactItem key={contact.email} name={contact.name} email={contact.email} />
                )}
            </ul>
        )
    }
}

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

class ContactItem extends Component {
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
};

let contacts = [
    { name: "Contacts1", email: "contacts1@contacts.com"},
    { name: "Contacts2", email: "contacts2@contacts.com"},
    { name: "Contacts3", email: "contacts3@contacts.com"},
    { name: "Contacts4", email: "contacts4@contacts.com"},
    { name: "Contacts5", email: "contacts5@contacts.com"},
    { name: "Contacts6", email: "contacts6@contacts.com"},
    { name: "Contacts7", email: "contacts7@contacts.com"},
    { name: "Contacts8", email: "contacts8@contacts.com"},
    { name: "Contacts9", email: "contacts9@contacts.com"},
    { name: "Contacts10", email: "contacts10@contacts.com"}
];

render(<ContactsApp contacts={contacts} />, document.getElementById('root'));