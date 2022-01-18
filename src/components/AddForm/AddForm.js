import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import s from './AddForm.module.scss';

function AddForm({ onSubmit }) {
  const [contact, setContact] = useState({ name: '', number: '' });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setContact(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    onSubmit(contact);
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
}

AddForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AddForm;
