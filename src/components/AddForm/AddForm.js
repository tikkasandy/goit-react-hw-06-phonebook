import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import contactActions from '../../redux/contacts/contacts-actions';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import Button from '../Button/Button';
import s from './AddForm.module.scss';

const AddForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const isNotUnique = contacts.find(item => item.name === contact.name);

    if (isNotUnique) {
      alert(`${contact.name} name is already in contacts`);
      return;
    };

    dispatch(contactActions.addContact(contact));
    reset();
  };

  const reset = () => {
    setContact({ name: '', number: '' });
  };

  return (
    <form className={s.Form} onSubmit={handleSubmit}>
      <label className={s.Label}>
        <p>Name</p>
        <input
          className={s.Input}
          onChange={handleChange}
          value={contact.name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.Label}>
        <p>Number</p>
        <input
          className={s.Input}
          onChange={handleChange}
          value={contact.number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></input>
      </label>
      <Button label="Add contact" type="submit" />
    </form>
  );
};

export default AddForm;
