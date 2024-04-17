import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 100;
  overflow: auto;
  @media only screen and (min-width: 1440px) {
    align-items: center;
  }
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 10px;
  padding: 24px 12px;
  margin: 40px 20px;
  background-color: #99b7ff;
  height: fit-content;
  @media only screen and (min-width: 768px) {
    padding: 32px 24px;
    margin: 40px 32px;
  }
`;

export const ModalButtonClose = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  padding: 0;
  right: 8px;
  top: 8px;
`;
