import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  width: calc((100% - 10px) / 2);
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: 30px;
  font-weight: 500;
`;
