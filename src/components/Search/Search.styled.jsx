import styled from "styled-components";

export const InputContainer = styled.div``;

export const InputWrapper = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  label {
    text-transform: uppercase;
    font-weight: bold;
  }
  input {
    padding: 8px;
    border-color: rgb(52, 112, 255);
    border-radius: 8px;
    background-color: rgba(52, 112, 255, 0.1);
  }
  input::placeholder {
    color: rgba(18, 20, 23, 0.4);
  }
`;
