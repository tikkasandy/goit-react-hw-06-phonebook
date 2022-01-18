import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import contactActions from '../../redux/contacts/contacts-actions';
import s from './Contacts.module.scss';

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul className={s.ContactsList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.ContactsItem}>
        <ContactItem
          id={id}
          name={name}
          number={number}
          onClick={onDeleteContact}
        />
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return sortContacts(
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    ),
  );
};

const sortContacts = data => {
  return [...data].sort((a, b) => a.name.localeCompare(b.name));
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
