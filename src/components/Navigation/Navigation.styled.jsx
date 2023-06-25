import styled from 'styled-components';
// import { NavLink as NavLinkComponent } from 'react-router-dom';

// export const NavLink = styled(NavLinkComponent)`
//   color: #fff;
// `;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const UserMenuStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const UserMenuName = styled.p`
  margin-right: 10px;
  font-weight: 700;
`;

export const UserMenuButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #000;
  background-color: #188ce8;
  border: transparent;
  color: #ffffff;
  cursor: pointer;
  transition: all 250ms ease-in-out;
`;

export const UserMenuButtonLabel = styled.span`
  margin-right: 5px;
`;
