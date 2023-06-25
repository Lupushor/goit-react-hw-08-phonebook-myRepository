import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import { Button, Form, Input, Label } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          autoComplete="off"
          title="Fill in this field"
          required
        />
      </Label>
      <Label>
        Password
        <Input
          type="password"
          name="password"
          autoComplete="off"
          title="Fill in this field"
          required
        />
      </Label>
      <Button type="submit">Log In</Button>
    </Form>
  );
};
