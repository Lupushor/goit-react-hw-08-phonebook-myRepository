import { ContactForm } from 'components/ContactForm/ContactForm';

const { ContactList } = require('components/ContactList/ContatcList');
const { useEffect } = require('react');
const { Helmet } = require('react-helmet');
const { useDispatch, useSelector } = require('react-redux');
const { fetchContacts } = require('redux/contacts/operations');
const { selectIsLoading } = require('redux/contacts/selectors');

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactList />
    </>
  );
};

export default ContactsPage;
