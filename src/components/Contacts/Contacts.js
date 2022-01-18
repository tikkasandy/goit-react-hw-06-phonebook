import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import s from './Contacts.module.scss';

function Contacts({ contacts, onDeleteContact }) {
  return (
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
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contacts;
