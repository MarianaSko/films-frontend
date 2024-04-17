import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 8px;
    width: 200px;
    border-radius: 8px;
    background-color: rgba(52, 112, 255, 0.5);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    /* transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1); */

    &:hover {
      /* transform: scale(1.03);
      cursor: pointer; */
    }
  }
  img {
    border-radius: 8px;
  }
`;

export const StyledMessage = styled.p`
  font-size: 20px;
  font-weight: 600;
  opacity: 0.6;

  span {
    color: #3470ff;
  }
`;
