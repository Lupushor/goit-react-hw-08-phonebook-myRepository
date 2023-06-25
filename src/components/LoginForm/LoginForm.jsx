import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.element.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email
        <input
          type="email"
          name="email"
          autoComplete="off"
          title="Fill in this field"
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          autoComplete="off"
          title="Fill in this field"
          required
        />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
