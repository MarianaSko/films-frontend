import { NavLink } from "react-router-dom/dist";
import styled from "styled-components";

export const InfoModalWrapper = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 24px;

  @media only screen and (max-width: 650px) {
    gap: 12px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 12px;
  }

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

    @media only screen and (max-width: 650px) {
      font-size: 24px;
    }
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

    @media only screen and (max-width: 650px) {
      margin-bottom: 6px;
    }
  }

  p {
    margin-bottom: 20px;

    @media only screen and (max-width: 650px) {
      margin-bottom: 6px;
    }
  }

  button {
    text-decoration: none;
    color: inherit;
    border: 2px solid rgba(52, 112, 255, 0.8);
    border-radius: 8px;
    padding: 8px 16px;
    color: rgba(52, 112, 255, 0.8);
    font-weight: bold;
    transition: all 0.5s ease-out allow-discrete;

    &:hover,
    &:focus {
      background-color: rgba(52, 112, 255, 0.8);
      color: aliceblue;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  border: 2px solid rgba(52, 112, 255, 0.8);
  border-radius: 8px;
  padding: 8px 16px;
  color: rgba(52, 112, 255, 0.8);
  font-weight: bold;
  transition: all 0.5s ease-out allow-discrete;

  &:hover,
  &:focus {
    background-color: rgba(52, 112, 255, 0.8);
    color: aliceblue;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media only screen and (max-width: 650px) {
    gap: 12px;
    justify-content: center;
  }
`;
