import AddForm from './components/AddForm';
import Contacts from './components/Contacts';
import Filter from './components/Filter/Filter';
import Section from './components/Section';

const App = () => (
  <>
    <Section title="Phonebook">
      <AddForm />
    </Section>
    <Section title="Contacts">
      <Filter />
      <Contacts />
    </Section>
  </>
);

export default App;