import React from "react";
import styled from "styled-components";
import { TopNavBar } from "global/component/organisms";

export const Nav: React.FC = () => {
  return (
    <StyledNav>
      <TopNavBar />
    </StyledNav>
  );
};

export const StyledNav = styled.nav`
  position: fixed;
  top: 0px;
  z-index: 500;
  font-size: 14px;
  letter-spacing: -0.4px;
  width: 100%;
  height: 72px;
  padding: 0px 4%;

  box-sizing: border-box;
`;
