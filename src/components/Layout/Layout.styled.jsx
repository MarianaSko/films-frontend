import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  margin-bottom: 60px;
`;
export const Header = styled.header`
  background-color: #3470ff;
  padding: 0 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;
export const StyledNavLink = styled(NavLink)`
  color: #fff;
  height: 60px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 12px 0;
  line-height: 2.25em;
  min-width: 90px;
  text-align: center;
  border-radius: 8px;
  transition: 200ms ease-in-out;

  &.active {
    color: #121417;
    font-weight: 800;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }

  &:hover,
  &:focus {
    color: #121417;
    font-weight: 800;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
`;

export const LogoNavLink = styled(NavLink)`
  text-decoration: none;
`;

export const StyledNavigation = styled.div`
  display: flex;
  gap: 20px;
`;
