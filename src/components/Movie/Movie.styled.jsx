import styled from "styled-components";

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    height: 244px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-weight: bold;
    opacity: 0.5;
  }
  p {
    font-size: 12px;
  }
`;

export const FavoriteBtn = styled.button`
  padding: 0 !important;
  margin-top: 0 !important;
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 14px;
  right: 14px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Btn = styled.button`
  margin-top: 12px;
  width: fit-content;
  padding: 8px;
  background-color: transparent;
  border: 1px solid #266db6;
  box-sizing: border-box;
  color: #00132c;
  font-family: "Avenir Next LT W01 Bold", sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover,
  &:active {
    outline: 0;
  }

  &:hover {
    background-color: transparent;
    cursor: pointer;
  }

  &:before {
    background-color: #d5edf6;
    content: "";
    height: calc(100% + 3px);
    position: absolute;
    right: -7px;
    top: -9px;
    transition: background-color 300ms ease-in;
    width: 100%;
    z-index: -1;
  }

  &:hover:before {
    background-color: rgba(52, 112, 255, 0.8);
  }
`;
