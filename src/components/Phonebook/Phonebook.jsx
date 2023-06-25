import { ContactForm } from 'components/ContactForm/ContactForm';
import { Layout, PhonebookAdd, PhonebookTitle } from './Phonebook.styled';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContatcList';

export const Phonebook = () => {
  return (
    <Layout>
      <PhonebookAdd>
        <PhonebookTitle>Phonebook</PhonebookTitle>
        <ContactForm />
      </PhonebookAdd>

      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Layout>
  );
};
