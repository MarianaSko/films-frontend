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
    /* font-size: 12px; */
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
`;
