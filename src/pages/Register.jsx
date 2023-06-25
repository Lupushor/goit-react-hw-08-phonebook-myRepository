import { RegisterForm } from 'components/RegisterForm/RegisterForm';

const { Helmet } = require('react-helmet');

const Login = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default Login;
