import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Button, Form, Input, Label } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <Input
          type="text"
          name="name"
          title="Fill in this field"
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          title="Fill in this field"
          autoComplete="off"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          title="Fill in this field"
          autoComplete="off"
          required
        />
      </Label>
      <Button type="submit">Register</Button>
    </Form>
  );
};
