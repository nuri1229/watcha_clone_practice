import React from "react";
import styled from "styled-components";
import { MainPage } from "main/page";

export const Main: React.FC = () => {
  return (
    <StyledMain>
      <MainPage />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  width: 100%;
  background: #141517;
`;
