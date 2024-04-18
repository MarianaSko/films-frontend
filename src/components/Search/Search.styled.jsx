import styled from "styled-components";

export const InputWrapper = styled.div`
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;

  input::placeholder {
    color: rgba(18, 20, 23, 0.4);
  }

  @media only screen and (max-width: 550px) {
    margin-bottom: 12px;
    padding: 0;
  }
`;
