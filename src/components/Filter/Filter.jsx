import { Form, Label } from 'components/ContactForm/ContactForm.styled';
import { Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from 'redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onFilter = e => {
    dispatch(setFilter(e.target.value.trim()));
  };

  return (
    <Form>
      <Label>
        Find contacts by name
        <Input value={filter} type="text" onChange={onFilter} />
      </Label>
    </Form>
  );
};
