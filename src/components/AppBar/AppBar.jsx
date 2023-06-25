import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};
