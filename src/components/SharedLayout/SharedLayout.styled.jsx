import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;
`;

export const Header = styled.header`
  background-color: #000000;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 30px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: #ffffff;
  font-size: 30px;
  font-weight: 500;

  &.active {
    color: red;
  }
`;
