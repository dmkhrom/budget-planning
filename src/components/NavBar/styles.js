import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 53px;
`;

export const CustomLink = styled(NavLink)`
  height: 16px;
  text-decoration: none;
  font-weight: 600;
  font-size: 20px;
  line-height: 16px;
  color: #000000;
  margin-right: 26px;
  padding-bottom: 10px;
  &.active {
    border-bottom: 3px solid #000000;
  }
`;
