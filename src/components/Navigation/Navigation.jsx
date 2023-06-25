import { useAuth } from 'hooks/useAuth';

import { Nav } from './Navigation.styled';
import { NavLink } from 'components/AuthNav/AuthNav.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
    </Nav>
  );
};
