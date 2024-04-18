import styled from "styled-components";

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  backdrop-filter: blur(80px);
  z-index: 10;
`;
