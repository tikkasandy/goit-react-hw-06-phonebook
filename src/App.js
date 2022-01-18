import { useState } from 'react';
import { nanoid } from 'nanoid';
import useLocalStorage from './hooks/useLocalStorage';
import AddForm from './components/AddForm';
import Contacts from './components/Contacts';
import Filter from './components/Filter/Filter';
import Section from './components/Section';

function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const isUnique = contacts.find(item => item.name === name);

    if (isUnique) {
      alert(`${name} name is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        name,
        number,
      };

      setContacts(prevState => [...prevState, contact]);
    }
  };

  const deleteContact = data => {
    setContacts(prevState => prevState.filter(contact => contact.id !== data));
  };

  const changeFilter = evt => {
    setFilter(evt.currentTarget.value);
  };

  const getVisibleContacts = () => {
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

  return (
    <>
      <Section title="Phonebook">
        <AddForm onSubmit={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter value={filter} onChange={changeFilter} />
        <Contacts
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </>
  );
}

export default App;
