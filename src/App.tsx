import React from "react";
import { GlobalStyle } from "global/style";
import { Layout } from "global/layout";
import styled from "styled-components";

export const App: React.FC = () => {
  return (
    <StyledRootWrapper>
      <GlobalStyle />
      <Layout />
    </StyledRootWrapper>
  );
};

export default App;

const StyledRootWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid black;
`;
