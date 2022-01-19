import { useDispatch, useSelector } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import ContactItem from '../ContactItem/ContactItem';
import s from './Contacts.module.scss';

const Contacts = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactActions.deleteContact(id));

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
};

export default Contacts;
