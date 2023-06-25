import { useAuth } from 'hooks/useAuth';
import { SubTitle, Title } from './Pages.styled';

const Home = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Title>Welcome to our service!</Title>
      <SubTitle>
        Please {isLoggedIn ? 'login' : 'register'} to continue
      </SubTitle>
    </div>
  );
};

export default Home;
