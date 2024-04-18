import styled from "styled-components";

export const AddMovieWrapper = styled.div`
  h3 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 24px;

    @media only screen and (max-width: 550px) {
      margin-bottom: 12px;
      font-size: 14px;
    }
  }

  form {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const StyledBtn = styled.button`
  margin-top: 24px;
  background-color: rgba(52, 112, 255, 0.5);
  border: 0 solid #e5e7eb;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-size: 1rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1.75rem;
  padding: 0.75rem 1.65rem;
  position: relative;
  text-align: center;
  text-decoration: none #000000 solid;
  text-decoration-thickness: auto;
  width: 100%;
  max-width: 460px;
  position: relative;
  cursor: pointer;
  transform: rotate(-2deg);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  @media (min-width: 768px) {
    padding: 0.75rem 3rem;
    font-size: 1.25rem;
  }

  &:focus {
    outline: 0;
  }

  &:after {
    content: "";
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
  }

  &:hover:after {
    bottom: 2px;
    left: 2px;
  }

  @media (min-width: 768px) {
    .button-53 {
      padding: 0.75rem 3rem;
      font-size: 1.25rem;
    }
  }
`;
