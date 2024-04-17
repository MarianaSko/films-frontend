import { NavLink } from "react-router-dom/dist";
import styled from "styled-components";

export const InfoModalWrapper = styled.div`
  display: flex;
  gap: 40px;
  img {
    max-height: 400px;
    max-width: 220px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 40px;
  }
`;
export const InfoWrapper = styled.div`
  h2 {
    font-size: 32px;
  }

  span {
    font-weight: bold;
    opacity: 0.5;
  }
  ul {
    display: flex;
    gap: 16px;
    text-transform: capitalize;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  button {
    appearance: none;
    background-color: transparent;
    border: 2px solid rgba(52, 112, 255, 0.8);
    border-radius: 15px;
    box-sizing: border-box;
    color: rgb(52, 112, 255);
    cursor: pointer;
    display: inline-block;

    font-size: 16px;
    font-weight: 600;
    line-height: normal;
    margin: 0;
    min-height: 60px;
    min-width: 0;
    outline: none;
    padding: 16px 24px;
    text-align: center;
    text-decoration: none;
    transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    width: 100px;
    will-change: transform;

    &:disabled {
      pointer-events: none;
    }

    &:hover {
      color: #fff;
      background-color: rgba(52, 112, 255, 0.8);
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }

    &:active {
      box-shadow: none;
      transform: translateY(0);
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  appearance: none;
  background-color: transparent;
  border: 2px solid rgba(52, 112, 255, 0.8);
  border-radius: 15px;
  box-sizing: border-box;
  color: rgb(52, 112, 255);
  cursor: pointer;
  display: inline-block;

  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  margin: 0;
  min-height: 60px;
  min-width: 0;
  outline: none;
  padding: 16px 24px;
  text-align: center;
  text-decoration: none;
  transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 100px;
  will-change: transform;

  &:disabled {
    pointer-events: none;
  }

  &:hover {
    color: #fff;
    background-color: rgba(52, 112, 255, 0.8);
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 24px;
`;
