import {
  UserMenuButton,
  UserMenuButtonLabel,
  UserMenuName,
  UserMenuStyled,
} from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuStyled>
      <UserMenuName>Welcome, {user.name}</UserMenuName>
      <UserMenuButton type="button" onClick={() => dispatch(logOut())}>
        <UserMenuButtonLabel>Logout</UserMenuButtonLabel>
      </UserMenuButton>
    </UserMenuStyled>
  );
};
