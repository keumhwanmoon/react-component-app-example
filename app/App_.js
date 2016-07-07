import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class ContactsApp extends Component {
    constructor() {
        super();
        this.state = {
            filterText: ''
        };
    }

    handleUserInput(searchTerm) {
        this.setState({filterText: searchTerm})
    }

    render() {
        return (
            <div>
                <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput.bind(this)} />
                <ContactsList contacts={this.props.contacts} filterText={this.state.filterText} />
            </div>
        )
    }
}

ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
};

class SearchBar extends Component {
    handleChange(event) {
        this.props.onUserInput(event.target.value)
    }
    render() {
        return <input type="search" placeholder="search" value={this.props.filterText}
                onChange={this.handleChange.bind(this)} />
    }
}

SearchBar.propTypes = {
    onUserInput: PropTypes.func.isRequired,
    filterText: PropTypes.string.isRequired
};

class ContactsList extends Component {
    render() {
        let filteredContacts = this.props.contacts.filter(
            (contacts) => contacts.name.indexOf(this.props.filterText) !== -1
        );

        return (
            <ul>
                {filteredContacts.map(
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