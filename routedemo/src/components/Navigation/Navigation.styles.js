import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #0070f3;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.li`
  padding: 10px 20px;
  background-color: #005bb5;
  color: white;
  border-radius: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003a75;
  }

  a {
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: none;
  }
`;
